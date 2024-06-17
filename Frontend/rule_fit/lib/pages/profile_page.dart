import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: ProfilePage(),
    );
  }
}

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  String _username = "Username";
  String _profileImageUrl =
      "https://m.yodycdn.com/blog/jerry-meme-yodyvn36.jpg";

  void _changeUsername() {
    TextEditingController usernameController = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text("Change Username"),
        content: TextField(
          controller: usernameController,
          decoration: const InputDecoration(hintText: "Enter new username"),
        ),
        actions: <Widget>[
          TextButton(
            child: const Text("Cancel"),
            onPressed: () {
              Navigator.of(context).pop();
            },
          ),
          TextButton(
            child: const Text("Save"),
            onPressed: () {
              setState(() {
                _username = usernameController.text;
              });
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
    );
  }

  void _changeProfileImage() {
    // Implement functionality to change profile image
    // For this example, we'll just simulate it with a placeholder URL change
    setState(() {
      _profileImageUrl = "https://via.placeholder.com/150?text=New+Image";
    });
  }

  void _logout() {
    // Implement logout functionality
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Profile"),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.only(top: 20.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Align(
                alignment: Alignment.topCenter,
                child: Stack(
                  children: [
                    CircleAvatar(
                      radius: 80,
                      backgroundImage: NetworkImage(_profileImageUrl),
                    ),
                    Positioned(
                      bottom: 0,
                      right: 0,
                      child: GestureDetector(
                        onTap: _changeProfileImage,
                        child: const CircleAvatar(
                          radius: 20,
                          backgroundColor: Colors.blue,
                          child: Icon(
                            Icons.add,
                            color: Colors.white,
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              GestureDetector(
                onTap: _changeUsername,
                child: Text(
                  _username,
                  style: const TextStyle(fontSize: 20, color: Colors.black),
                ),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: _logout,
                style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
                child: const Text(
                  "Logout",
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
