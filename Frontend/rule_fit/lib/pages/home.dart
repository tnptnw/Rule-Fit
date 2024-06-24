import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:rule_fit/Token/token_manager.dart';
import 'package:rule_fit/components/bottom_bar.dart';
import 'package:rule_fit/pages/history.dart';
import 'package:rule_fit/pages/profile_page.dart';

import 'dart:convert';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController _heightController = TextEditingController();
  final TextEditingController _weightController = TextEditingController();
  TimeOfDay _sleepTime = TimeOfDay.now();
  TimeOfDay _wakeUpTime = TimeOfDay.now();
  final TextEditingController _caloriesController = TextEditingController();
  final TextEditingController _proteinController = TextEditingController();
  final TextEditingController _carbsController = TextEditingController();
  final TextEditingController _fatController = TextEditingController();
  double _healthScore = 0.0;
  bool showInputFields = true;
  bool suggestionsExpanded = false;
  bool showSuggestions = false;
  List<Map<String, String>> suggestions = [];
  String bmiSuggest = "";
  String sleepSuggest = "";
  String calorieSuggest = "";
  String proteinSuggest = "";
  String carbSuggest = "";
  String fatSuggest = "";
  String healthName = "";
  int _selectedIndex = 1;
  String? _token;
  String errorMessage = "";

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      if (index == 0) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HistoryPage()),
        );
      } else if (index == 1) {
        // Stay on the current page
      } else if (index == 2) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const ProfilePage()),
        );
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
  }

  @override
  void dispose() {
    _heightController.dispose();
    _weightController.dispose();
    _caloriesController.dispose();
    _proteinController.dispose();
    _carbsController.dispose();
    _fatController.dispose();
    super.dispose();
  }

  DateTime convertToDateTime(TimeOfDay timeOfDay) {
    final now = DateTime.now();
    return DateTime(
        now.year, now.month, now.day, timeOfDay.hour, timeOfDay.minute);
  }

  bool _validateFields() {
    if (_heightController.text.isEmpty ||
        _weightController.text.isEmpty ||
        _caloriesController.text.isEmpty ||
        _proteinController.text.isEmpty ||
        _carbsController.text.isEmpty ||
        _fatController.text.isEmpty) {
      setState(() {
        errorMessage = 'Please fill in all fields';
      });
      return false;
    }
    setState(() {
      errorMessage = ''; // Clear the error message if all fields are filled
    });
    return true;
  }

  Future<void> _submitForm() async {
    if (_token == null) {
      // Handle token not being available
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error: Token not available')),
      );
      return;
    }

    if (!_validateFields()) {
      return;
    }

    final sleepTime = convertToDateTime(_sleepTime);
    final wakeUpTime = convertToDateTime(_wakeUpTime);

    final formData = {
      'token': _token,
      'height': _heightController.text,
      'weight': _weightController.text,
      'sleepStart': sleepTime.toUtc().toIso8601String(),
      'sleepEnd': wakeUpTime.toUtc().toIso8601String(),
      'calorie': int.parse(_caloriesController.text),
      'protein': int.parse(_proteinController.text),
      'carbohydrate': int.parse(_carbsController.text),
      'fat': int.parse(_fatController.text),
    };

    final url = Uri.parse('http://localhost:4000/parameter/create');

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
        final responseData = jsonDecode(response.body);
        setState(() {
          _healthScore =
              (responseData['data']['score']['totalScore'] as num).toDouble();
          showInputFields = false;
          bmiSuggest = responseData['data']['suggest']['BMISuggest'];
          sleepSuggest = responseData['data']['suggest']['sleepSuggest'];
          calorieSuggest = responseData['data']['suggest']['calorieSuggest'];
          proteinSuggest = responseData['data']['suggest']['proteinSuggest'];
          carbSuggest = responseData['data']['suggest']['cabohydrateSuggest'];
          fatSuggest = responseData['data']['suggest']['fatSuggest'];
          healthName = responseData['data']['score']['name'];
          showSuggestions = true;
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

  InputDecoration _buildInputDecoration(String labelText) {
    return InputDecoration(
      labelText: labelText,
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(20.0),
      ),
      filled: true,
      fillColor: Colors.white,
      contentPadding:
          const EdgeInsets.symmetric(vertical: 1.0, horizontal: 20.0),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Health Score
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Text(
                  'Health Score',
                  style: TextStyle(
                    fontSize: 20.0,
                    fontWeight: FontWeight.normal,
                  ),
                ),
                Text(
                  '$_healthScore',
                  style: const TextStyle(
                      fontSize: 26.0, fontWeight: FontWeight.bold),
                ),
                Text(
                  healthName,
                  style: const TextStyle(
                      fontSize: 20.0, fontWeight: FontWeight.bold),
                ),
              ],
            ),
            if (showInputFields) ...[
              const SizedBox(height: 20.0),
              // BMI
              const Text(
                'BMI',
                style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 10.0),
              // Height
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Height (cm)',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _heightController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Weight
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Weight (kg)',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _weightController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20.0),
              // Sleep
              const Text(
                'Sleep',
                style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 10.0),
              // Sleep Time
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Sleep Start',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: InkWell(
                      onTap: () async {
                        final selectedTime = await showTimePicker(
                          context: context,
                          initialTime: _sleepTime,
                        );
                        if (selectedTime != null) {
                          setState(() {
                            _sleepTime = selectedTime;
                          });
                        }
                        _validateFields();
                      },
                      child: InputDecorator(
                        decoration: _buildInputDecoration(''),
                        child: Text(
                          _sleepTime.format(context),
                          textAlign: TextAlign.end,
                          style: const TextStyle(fontSize: 14.0),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Wake Up Time
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Sleep End',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: InkWell(
                      onTap: () async {
                        final selectedTime = await showTimePicker(
                          context: context,
                          initialTime: _wakeUpTime,
                        );
                        if (selectedTime != null) {
                          setState(() {
                            _wakeUpTime = selectedTime;
                          });
                        }
                        _validateFields();
                      },
                      child: InputDecorator(
                        decoration: _buildInputDecoration(''),
                        child: Text(
                          _wakeUpTime.format(context),
                          textAlign: TextAlign.end,
                          style: const TextStyle(fontSize: 14.0),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20.0),
              // Food
              const Text(
                'Food',
                style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 10.0),
              // Calories
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Calories/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _caloriesController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Protein
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Protein/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _proteinController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Carbs
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Carbs/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _carbsController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 10.0),
              // Fat
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  const Text(
                    '     Fat/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 130,
                    child: TextFormField(
                      controller: _fatController,
                      decoration: _buildInputDecoration(''),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                      onChanged: (value) {
                        _validateFields();
                      },
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20.0),
              if (errorMessage.isNotEmpty)
                Text(
                  errorMessage,
                  style: const TextStyle(color: Colors.red),
                ),
              const SizedBox(
                height: 20,
              ),
              ElevatedButton(
                onPressed: _validateFields()
                    ? () {
                        setState(() {
                          showSuggestions = true;
                          showInputFields = false;
                        });
                      }
                    : null,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFEDC4A6).withOpacity(0.75),
                ),
                child: const Text(
                  'See My Suggestions',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ] else if (showSuggestions) ...[
              // Display suggestions
              const Text(
                'BMI Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(bmiSuggest),
              const SizedBox(height: 16.0),
              const Text(
                'Sleep Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(sleepSuggest),
              const SizedBox(height: 16.0),
              const Text(
                'Calories Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(calorieSuggest),
              const SizedBox(height: 16.0),
              const Text(
                'Proteins Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(proteinSuggest),
              const SizedBox(height: 16.0),
              const Text(
                'Carbs Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(carbSuggest),
              const SizedBox(height: 16.0),
              const Text(
                'Fat Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(fatSuggest),
              const SizedBox(height: 16.0),
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    showInputFields = true; // Switch back to input fields
                    showSuggestions = false;
                  });
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFEDC4A6).withOpacity(0.75),
                ),
                child: const Text(
                  'Go Back',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],

            const SizedBox(height: 20.0),
            // Calculate Button
            if (showInputFields) ...[
              ElevatedButton(
                onPressed: _submitForm,
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF759873),
                ),
                child: const Text(
                  'Calculate',
                  style: TextStyle(color: Colors.white),
                ),
              ),
            ],
          ],
        ),
      ),
      bottomNavigationBar: BottomNavBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }
}
