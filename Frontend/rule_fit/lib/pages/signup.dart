import 'package:flutter/material.dart';

class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
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
                    'Sign Up',
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
                  controller: _birthYearController,
                  decoration: _buildInputDecoration('Birth Year'),
                  keyboardType: TextInputType.number,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your birth year';
                    }
                    if (int.tryParse(value) == null) {
                      return 'Please enter a valid year';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 15),
                DropdownButtonFormField<String>(
                  value: _selectedGender,
                  decoration: _buildInputDecoration('Gender'),
                  items: _genders.map((gender) {
                    return DropdownMenuItem<String>(
                      value: gender,
                      child: Text(gender),
                    );
                  }).toList(),
                  onChanged: (value) {
                    setState(() {
                      _selectedGender = value!;
                    });
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
                const SizedBox(height: 15),
                TextFormField(
                  controller: _confirmPasswordController,
                  decoration: _buildInputDecoration('Confirm Password'),
                  obscureText: true,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please confirm your password';
                    }
                    if (value != _passwordController.text) {
                      return 'Passwords do not match';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: _submitForm,
                  style: ElevatedButton.styleFrom(
                    minimumSize: Size(double.infinity, 20.0),
                    backgroundColor: Color(0xFF759873),
                    padding: EdgeInsets.symmetric(vertical: 15.0),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(
                          30.0), // Increased border radius for button
                    ),
                  ),
                  child: const Text(
                    'Sign Up',
                    style: TextStyle(color: Colors.white),
                  ),
                ),
                const SizedBox(height: 10),
                GestureDetector(
                  onTap: () {
                    // Add your navigation or any other action here
                    print(
                        'Already have an account?'); // Example action: print a message
                  },
                  child: Center(
                    child: Text(
                      'Already have an account?',
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
