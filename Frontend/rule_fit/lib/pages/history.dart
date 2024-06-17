import 'package:flutter/material.dart';

class HistoryPage extends StatelessWidget {
  const HistoryPage({super.key});

  final int score = 96;
  final String date = '20 May 2024';
  final double height = 176.4;
  final double weight = 66.6;
  final double sleepHours = 8.36;
  final int caloriesConsumed = 1245;
   

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const SizedBox(height: 16.0),
            const Center(
              child: Text(
                'History',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ),
            const SizedBox(height: 16.0),
            Center(
              child: Container(
                width: MediaQuery.of(context).size.width * 1.0,
                height: 150,
                decoration: BoxDecoration(
                  color: const Color(0xFFEDC4A6).withOpacity(0.25),
                  borderRadius: BorderRadius.circular(30),
                ),
                child: Row(
                  children: [
                    Expanded(
                      child: Container(
                        margin: const EdgeInsets.all(8.0),
                        decoration: BoxDecoration(
                          color: Colors.transparent,
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              date,
                              style: const TextStyle(
                                color: Colors.black,
                                fontSize: 20,
                              ),
                            ),
                            Text(
                              '$score', 
                              style: const TextStyle(
                                color: Colors.black,
                                fontSize: 70,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    Expanded(
                      child: Container(
                        margin: const EdgeInsets.all(8.0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            buildDataRow('Height', '$height cm.'),
                            buildDataRow('Weight', '$weight kg.'),
                            buildDataRow('Sleep', '  $sleepHours hrs.'),
                            buildDataRow('Food', '   $caloriesConsumed cal.'),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            // Add more widgets here if needed
          ],
        ),
      ),
    );
  }

  Widget buildDataRow(String title, String value) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: [
        Text(
          '$title    ',
          style: const TextStyle(
            color: Colors.black,
            fontSize: 20,
          ),
        ),
        Text(
          value,
          style: const TextStyle(
            color: Colors.black,
            fontSize: 20,
          ),
        ),
      ],
    );
  }
}
