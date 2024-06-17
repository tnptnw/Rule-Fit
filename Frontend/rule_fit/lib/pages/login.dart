import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:rule_fit/pages/home.dart';

class LogInPage extends StatefulWidget {
  const LogInPage({super.key});

  @override
  _LogInPageState createState() => _LogInPageState();
}

class _LogInPageState extends State<LogInPage> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();
  String _jwtToken = "";

  @override
  void dispose() {
    _usernameController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _submitForm() async {
    if (_formKey.currentState!.validate()) {
      // Prepare the login data
      final loginData = {
        'username': _usernameController.text,
        'password': _passwordController.text,
      };

      // Define the endpoint URL of your backend
      final url = Uri.parse('http://localhost:4000/auth/login');

      // Send the POST request
      try {
        final response = await http.post(
          url,
          headers: {'Content-Type': 'application/json'},
          body: jsonEncode(loginData),
        );

        if (response.statusCode == 200) {
          // Handle successful login, e.g., navigate to another page
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('Login successful')),
          );
          final responseData = jsonDecode(response.body);
          setState(() {
            _jwtToken = responseData['token'];
          });

          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => HomePage(jwtToken: _jwtToken)));
          // Navigator.pushReplacementNamed(context, '/home');
        } else {
          // Handle errors
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Login failed: ${response.body}')),
          );
        }
      } catch (e) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $e')),
        );
      }
    }
  }

  InputDecoration _buildInputDecoration(String labelText) {
    return InputDecoration(
      labelText: labelText,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(25.0), // Increased border radius
      ),
      filled: true,
      fillColor: Colors.white,
      contentPadding: const EdgeInsets.symmetric(vertical: 15.0, horizontal: 20.0),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Center(
          child: Form(
            key: _formKey,
            child: ListView(
              shrinkWrap: true,
              children: <Widget>[
                const Center(
                  child: Text(
                    'Log In',
                    style: TextStyle(
                      fontSize: 24.0,
                      fontWeight: FontWeight.normal,
                    ),
                  ),
                ),
                const SizedBox(height: 20),
                TextFormField(
                  controller: _usernameController,
                  decoration: _buildInputDecoration('Username'),
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your username';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 15),
                TextFormField(
                  controller: _passwordController,
                  decoration: _buildInputDecoration('Password'),
                  obscureText: true,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your password';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _submitForm,
                  style: ElevatedButton.styleFrom(
                    minimumSize: const Size(double.infinity, 40.0),
                    backgroundColor: const Color(0xFF759873),
                    padding: const EdgeInsets.symmetric(vertical: 15.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(30.0),
                    ),
                  ),
                  child: const Text(
                    'Log In',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                const SizedBox(height: 10),
                GestureDetector(
                  onTap: () {
                    // Add your navigation or any other action here
                  },
                  child: const Center(
                    child: Text(
                      "Don't have an account?",
                      style: TextStyle(
                        fontSize: 16.0,
                        fontWeight: FontWeight.normal,
                        color: Colors
                            .blue, // Change color to indicate it's clickable
                        decoration: TextDecoration
                            .underline, // Add underline for better indication
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
