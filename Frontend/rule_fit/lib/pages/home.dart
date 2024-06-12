import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController _heightController = TextEditingController();
  TextEditingController _weightController = TextEditingController();
  TextEditingController _sleepTimeController = TextEditingController();
  TextEditingController _wakeUpTimeController = TextEditingController();
  TextEditingController _caloriesController = TextEditingController();
  TextEditingController _proteinController = TextEditingController();
  TextEditingController _carbsController = TextEditingController();
  TextEditingController _fatController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('My Health App'),
      // ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Health Score
            const Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  'Health Score',
                  style: TextStyle(fontSize: 20.0, fontWeight: FontWeight.normal),
                ),
                Text(
                  '0',
                  style: TextStyle(fontSize: 26.0, fontWeight: FontWeight.bold),
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            // BMI
            const Text(
              'BMI',
              style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 10.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.number,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
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
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Sleep Time',
                  style: TextStyle(fontSize: 16.0),
                ),
                SizedBox(
                  width: 200,
                  child: TextFormField(
                    controller: _sleepTimeController,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.datetime,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text(
                  'Wake Up Time',
                  style: TextStyle(fontSize: 16.0),
                ),
                SizedBox(
                  width: 200,
                  child: TextFormField(
                    controller: _wakeUpTimeController,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.datetime,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.number,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.number,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.number,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 10.0),
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
                    decoration: InputDecoration(
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20.0),
                      ),
                      filled: true,
                      fillColor: Colors.white,
                    ),
                    keyboardType: TextInputType.number,
                    textAlign: TextAlign.end,
                    style: const TextStyle(fontSize: 14.0),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20.0),
            ElevatedButton(
              onPressed: () {
                // Implement button action here
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF759873),
              ),
              child: const Text(
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
