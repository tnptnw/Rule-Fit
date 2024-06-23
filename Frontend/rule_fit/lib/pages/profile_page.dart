import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:image_picker/image_picker.dart';
import 'package:rule_fit/Token/token_manager.dart';
import 'package:rule_fit/components/bottom_bar.dart';
import 'package:rule_fit/pages/history.dart';
import 'package:rule_fit/pages/home.dart';
import 'package:rule_fit/pages/login.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  late Map<String, dynamic> userData;
  bool isLoading = true;
  final TextEditingController _nameController = TextEditingController();
  String? _token;
  int _selectedIndex = 2;
  List<Map<String, dynamic>> historyData = [];
  double averageScore = 0.0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      if (index == 0) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HistoryPage()),
        );
      } else if (index == 1) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HomePage()),
        );
      } else if (index == 2) {
        // Stay on the current page
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _loadToken();
  }

  Future<void> _loadToken() async {
    String? token = await TokenManager().getToken();
    setState(() {
      _token = token;
    });

    if (_token != null) {
      _fetchProfileData();
    } else {
      print("token not available");
    }
  }

  Future<void> _fetchProfileData() async {
    final formData = {
      'token': _token,
    };
    final url = Uri.parse('http://localhost:4000/user/getUsername');

    try {
      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_token',
        },
        body: jsonEncode(formData),
      );

      if (response.statusCode == 200) {
        setState(() {
          userData = jsonDecode(response.body)['data'];
          _nameController.text = userData['username'];
          isLoading = false;
        });
        _fetchHistoryData();
      } else {
        print(response.body);
      }
    } catch (e) {
      print(e);
    }
  }

  Future<void> _fetchHistoryData() async {
    final url = Uri.parse('http://localhost:4000/history/getHistory');

    try {
      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_token',
        },
        body: jsonEncode({'token': _token}),
      );

      if (response.statusCode == 200) {
        List<Map<String, dynamic>> allHistoryData =
            List<Map<String, dynamic>>.from(jsonDecode(response.body)['data']);

        // Filter data for the last 7 days
        DateTime today = DateTime.now();
        DateTime weekAgo = today.subtract(Duration(days: 7));

        List<Map<String, dynamic>> filteredData = allHistoryData.where((entry) {
          DateTime entryDate = DateTime.parse(entry['date']);
          return entryDate.isAfter(weekAgo) && entryDate.isBefore(today);
        }).toList();

        // Calculate average score
        double totalScore = 0.0;
        for (var entry in filteredData) {
          if (entry['score'] != null && entry['score']['totalScore'] != null) {
            totalScore += double.parse(entry['score']['totalScore'].toString());
          }
        }

        if (filteredData.isNotEmpty) {
          averageScore = totalScore / filteredData.length;
        }

        setState(() {
          historyData = filteredData;
        });
      } else {
        print('Error fetching history data: ${response.body}');
      }
    } catch (e) {
      print('Exception during history data fetch: $e');
    }
  }

  Future<void> _pickAndUploadImage() async {
    final ImagePicker picker = ImagePicker();
    final XFile? image = await picker.pickImage(source: ImageSource.gallery);

    if (image != null) {
      final url = Uri.parse('http://localhost:4000/user/updateImage');
      final request = http.MultipartRequest('POST', url);
      request.headers['Authorization'] = 'Bearer $_token';
      request.files
          .add(await http.MultipartFile.fromPath('picture', image.path));

      final response = await request.send();

      if (response.statusCode == 200) {
        final responseData = await response.stream.bytesToString();
        setState(() {
          userData['profilePicture'] =
              jsonDecode(responseData)['profilePicture'];
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Failed to upload image')),
        );
      }
    }
  }

  Future<void> _updateUsername() async {
    final url = Uri.parse('http://localhost:4000/user/updateUsername');
    final updatedData = {
      'token': _token,
      'username': _nameController.text,
    };

    try {
      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_token',
        },
        body: jsonEncode(updatedData),
      );

      if (response.statusCode == 200) {
        setState(() {
          userData['username'] = _nameController.text;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Profile updated successfully')),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: ${response.body}')),
        );
      }
    } catch (e) {
      print(e);
    }
  }

  void _showEditUsernameDialog() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: const Text('Edit Username'),
          content: TextField(
            controller: _nameController,
            decoration: const InputDecoration(labelText: 'Username'),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('Cancel'),
            ),
            TextButton(
              onPressed: () {
                _updateUsername();
                Navigator.of(context).pop();
              },
              child: const Text('Save'),
            ),
          ],
        );
      },
    );
  }

  void _showFullImage() {
    showDialog(
      context: context,
      builder: (context) {
        return Dialog(
          child: GestureDetector(
            onTap: () => Navigator.of(context).pop(),
            child: Image.network(
              userData['profilePicture'] ??
                  'assets/default_profile_picture.png',
              fit: BoxFit.cover,
            ),
          ),
        );
      },
    );
  }

  void _logout() {
    // Implement logout logic here
    // For example, clear the token and navigate to the login page
    TokenManager().clearToken();
    Navigator.of(context).pushAndRemoveUntil(
      MaterialPageRoute(
        builder: (context) => const LogInPage(),
      ),
      (route) => false,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: isLoading
          ? const Center(child: CircularProgressIndicator())
          : Center(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const SizedBox(height: 20.0),
                    const Center(
                      child: Text(
                        'Profile',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ),
                    const SizedBox(height: 20.0),
                    Stack(
                      children: [
                        GestureDetector(
                          onTap: _showFullImage,
                          child: const CircleAvatar(
                            radius: 80,
                            // backgroundImage: userData['profilePicture'] != null
                            //     ? NetworkImage(userData['profilePicture'])
                            //     : const AssetImage(
                            //             'assets/default_profile_picture.png')
                            //         as ImageProvider,
                          ),
                        ),
                        Positioned(
                          bottom: 0,
                          right: 0,
                          child: GestureDetector(
                            onTap: _pickAndUploadImage,
                            child: const CircleAvatar(
                              radius: 15,
                              backgroundColor: Colors.white,
                              child: Icon(
                                Icons.add,
                                color: Colors.black,
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 30.0),
                    GestureDetector(
                      onTap: _showEditUsernameDialog,
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            userData['username'] ?? '',
                            style: const TextStyle(fontSize: 25.0),
                          ),
                          const SizedBox(width: 4.0),
                          const Icon(
                            Icons.edit,
                            size: 20.0,
                            color: Colors.grey,
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 20.0),
                    const Text(
                      'Average Score (Last 7 days)',
                      style: TextStyle(fontSize: 18.0),
                    ),
                    Text(averageScore.toStringAsFixed(2),
                        style: const TextStyle(fontSize: 25.0)),
                    const SizedBox(height: 20.0),
                    ElevatedButton(
                      onPressed: _logout,
                      style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.red // This is what you need!
                          ),
                      child: const Text(
                        'Logout',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    // Add more fields as necessary
                  ],
                ),
              ),
            ),
      bottomNavigationBar: BottomNavBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}
