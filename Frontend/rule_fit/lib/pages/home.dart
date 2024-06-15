import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget {
  final String jwtToken;

  const HomePage({super.key, required this.jwtToken});
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
  bool showSuggestions = false; // Add this line to your state
  List<Map<String, String>> suggestions = [];
  String bmiSuggest = "";
  String sleepSuggest = "";
  String calorieSuggest = "";
  String proteinSuggest = "";
  String carbSuggest = "";
  String fatSuggest = "";

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

  // Function to convert TimeOfDay to DateTime
  DateTime convertToDateTime(TimeOfDay timeOfDay) {
    final now = DateTime.now();
    return DateTime(
        now.year, now.month, now.day, timeOfDay.hour, timeOfDay.minute);
  }

  Future<void> _submitForm() async {
    // Convert TimeOfDay to String
    final sleepTime = convertToDateTime(_sleepTime);
    final wakeUpTime = convertToDateTime(_wakeUpTime);

    // Collect the form data
    final formData = {
      'token': widget.jwtToken,
      'height': _heightController.text,
      'weight': _weightController.text,
      'sleepStart': sleepTime.toUtc().toIso8601String(),
      'sleepEnd': wakeUpTime.toUtc().toIso8601String(),
      'calorie': int.parse(_caloriesController.text),
      'protein': int.parse(_proteinController.text),
      'carbohydrate': int.parse(_carbsController.text),
      'fat': int.parse(_fatController.text),
    };

    // Define the endpoint URL of your backend
    final url = Uri.parse('http://localhost:4000/parameter/create');

    // Send the POST request
    try {
      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ${widget.jwtToken}',
        },
        body: jsonEncode(formData),
      );
      if (response.statusCode == 200) {
        // Parse the response body
        final responseData = jsonDecode(response.body);
        // print(responseData);
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
          showSuggestions = true; // Add this line to show suggestions
        });

        // await _fetchHealthScore();
      } else {
        // Handle errors
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
          const EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
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
                  style:
                      TextStyle(fontSize: 20.0, fontWeight: FontWeight.normal),
                ),
                Text(
                  '$_healthScore',
                  style: const TextStyle(
                      fontSize: 26.0, fontWeight: FontWeight.bold),
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
                    'Height (cm)',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _heightController,
                      decoration: _buildInputDecoration('Height (cm)'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
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
                    'Weight (kg)',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _weightController,
                      decoration: _buildInputDecoration('Weight (kg)'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
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
                    'Sleep Time',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
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
                      },
                      child: InputDecorator(
                        decoration: _buildInputDecoration('Sleep Time'),
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
                    'Wake Up Time',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
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
                      },
                      child: InputDecorator(
                        decoration: _buildInputDecoration('Wake Up Time'),
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
                    'Calories/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _caloriesController,
                      decoration: _buildInputDecoration('Calories/day'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
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
                    'Protein/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _proteinController,
                      decoration: _buildInputDecoration('Protein/day'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
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
                    'Carbs/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _carbsController,
                      decoration: _buildInputDecoration('Carbs/day'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
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
                    'Fat/day',
                    style: TextStyle(fontSize: 16.0),
                  ),
                  SizedBox(
                    width: 200,
                    child: TextFormField(
                      controller: _fatController,
                      decoration: _buildInputDecoration('Fat/day'),
                      keyboardType: TextInputType.number,
                      textAlign: TextAlign.end,
                      style: const TextStyle(fontSize: 14.0),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20.0),
              // See My Score button
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    showSuggestions = true;
                    showInputFields = false;
                  });
                },
                child: const Text('See My Suggestions'),
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
                'Calorie Suggestion:',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
              Text(calorieSuggest),
              const Text(
                'Protein Suggestion:',
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
              ElevatedButton(
                onPressed: () {
                  setState(() {
                    showInputFields = true; // Switch back to input fields
                    showSuggestions = false;
                  });
                },
                child: const Text('Go Back'),
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
    );
  }
}
