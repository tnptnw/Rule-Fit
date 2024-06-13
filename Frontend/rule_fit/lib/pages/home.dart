import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget {
  final String jwtToken;

  HomePage({required this.jwtToken});
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
      print(sleepTime);
      print(wakeUpTime);
      if (response.statusCode == 200) {
        // Parse the response body
        final responseData = jsonDecode(response.body);
        setState(() {
          _healthScore = responseData['totalScore'];
        });
        print(responseData);
        await _fetchHealthScore();
      } else {
        // Handle errors
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: ${response.body}')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: $e')),
      );
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
      contentPadding: EdgeInsets.symmetric(vertical: 10.0, horizontal: 20.0),
    );
  }

  Future<void> _fetchHealthScore() async {
    final url = Uri.parse(
        'http://localhost:4000/score/getScore'); // Adjust the URL to your backend endpoint
    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final responseData = jsonDecode(response.body);
        setState(() {
          _healthScore = responseData['totalScore'];
          print(responseData);
        });
      } else {
        // Handle error responses
        print('Failed to fetch health score: ${response.statusCode}');
      }
    } catch (e) {
      // Handle network errors
      print('Error fetching health score: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Health Score
            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  'Health Score',
                  style:
                      TextStyle(fontSize: 20.0, fontWeight: FontWeight.normal),
                ),
                Text(
                  '$_healthScore',
                  style: TextStyle(fontSize: 26.0, fontWeight: FontWeight.bold),
                ),
              ],
            ),
            SizedBox(height: 20.0),
            // BMI
            Text(
              'BMI',
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0),
            // Height
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10.0),
            // Weight
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 20.0),
            // Sleep
            Text(
              'Sleep',
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0),
            // Sleep Time
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                        '${_sleepTime.format(context)}',
                        textAlign: TextAlign.end,
                        style: TextStyle(fontSize: 14.0),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10.0),
            // Wake Up Time
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                        '${_wakeUpTime.format(context)}',
                        textAlign: TextAlign.end,
                        style: TextStyle(fontSize: 14.0),
                      ),
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(height: 20.0),
            // Food
            Text(
              'Food',
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0),
            // Calories
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10.0),
            // Protein
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10.0),
            // Carbs
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 10.0),
            // Fat
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
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
                    style: TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            SizedBox(height: 20.0),
            // Calculate Button
            ElevatedButton(
              onPressed: _submitForm,
              style: ElevatedButton.styleFrom(
                backgroundColor: Color(0xFF759873),
              ),
              child: Text(
                'Calculate',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
