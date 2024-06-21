import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:io';
import 'package:image_picker/image_picker.dart';
import 'package:rule_fit/Token/token_manager.dart';

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  late Map<String, dynamic> userData;
  bool isLoading = true;
  bool isEditingName = false;
  final TextEditingController _nameController = TextEditingController();
  String? _token;

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
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: Token not available')),
      );
    }
  }

  Future<void> _fetchProfileData() async {
    final url = Uri.parse('http://localhost:4000/user/profile');

    try {
      final response = await http.get(
        url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_token',
        },
      );

      if (response.statusCode == 200) {
        setState(() {
          userData = jsonDecode(response.body)['data'];
          _nameController.text = userData['name'];
          isLoading = false;
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: ${response.body}')),
        );
      }
    } catch (e) {
      print(e);
    }
  }

  Future<void> _pickAndUploadImage() async {
    final ImagePicker _picker = ImagePicker();
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);

    if (image != null) {
      final url = Uri.parse('http://localhost:4000/user/profile/picture');
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
          SnackBar(content: Text('Failed to upload image')),
        );
      }
    }
  }

  Future<void> _updateUsername() async {
    final url = Uri.parse('http://localhost:4000/user/profile/update');
    final updatedData = {
      'name': _nameController.text,
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
          userData['name'] = _nameController.text;
          isEditingName = false;
        });
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Profile updated successfully')),
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator())
          : Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: _pickAndUploadImage,
                    child: CircleAvatar(
                      radius: 50,
                      backgroundImage: userData['profilePicture'] != null
                          ? NetworkImage(userData['profilePicture'])
                          : AssetImage('assets/default_profile_picture.png')
                              as ImageProvider,
                      child: Icon(Icons.camera_alt),
                    ),
                  ),
                  SizedBox(height: 10.0),
                  isEditingName
                      ? TextField(
                          controller: _nameController,
                          decoration: InputDecoration(
                            labelText: 'Name',
                            suffixIcon: IconButton(
                              icon: Icon(Icons.check),
                              onPressed: _updateUsername,
                            ),
                          ),
                        )
                      : GestureDetector(
                          onTap: () {
                            setState(() {
                              isEditingName = true;
                            });
                          },
                          child: Text(
                            'Name: ${userData['name']}',
                            style: TextStyle(fontSize: 18.0),
                          ),
                        ),
                  SizedBox(height: 10.0),
                  Text(
                    'Email: ${userData['email']}',
                    style: TextStyle(fontSize: 18.0),
                  ),
                  SizedBox(height: 10.0),
                  // Add more fields as necessary
                ],
              ),
            ),
    );
  }
}