import 'package:flutter/material.dart';

class LogInPage extends StatefulWidget {
  @override
  _LogInPageState createState() => _LogInPageState();
}

class _LogInPageState extends State<LogInPage> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _birthYearController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  String _selectedGender = 'Men';
  final List<String> _genders = ['Men', 'Female', 'Others'];

  @override
  void dispose() {
    _usernameController.dispose();
    _birthYearController.dispose();
    _passwordController.dispose();
    _confirmPasswordController.dispose();
    super.dispose();
  }

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // Process the form data
      print('Username: ${_usernameController.text}');
      print('Birth Year: ${_birthYearController.text}');
      print('Password: ${_passwordController.text}');
      print('Gender: $_selectedGender');
      // You can navigate to another page or perform other actions here
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
      contentPadding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 20.0),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   automaticallyImplyLeading: false,
      // ),
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
                    minimumSize: const Size(120.0, 40.0),
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
