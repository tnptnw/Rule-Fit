import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:rule_fit/Token/token_manager.dart';
import 'dart:convert';
import 'package:intl/intl.dart';

import 'package:rule_fit/components/bottom_bar.dart';
import 'package:rule_fit/constant.dart';
import 'package:rule_fit/pages/home.dart';
import 'package:rule_fit/pages/profile_page.dart';

class HistoryPage extends StatefulWidget {
  const HistoryPage({super.key});

  @override
  _HistoryPageState createState() => _HistoryPageState();
}

class _HistoryPageState extends State<HistoryPage> {
  List<Map<String, dynamic>> historyData = [];
  bool isLoading = true;
  String? _token;

  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      if (index == 0) {
        // Stay on the current page
      } else if (index == 1) {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const HomePage()),
        );
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
    if (token == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error: Token not available')),
      );
    } else {
      setState(() {
        _token = token;
      });
      _fetchHistoryData();
    }
  }

  Future<void> _fetchHistoryData() async {
    if (_token == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error: Token is null')),
      );
      return;
    }

    final url = Uri.parse('${EnvironmentConstant.baseUrl}/history/getHistory');

    try {
      final response = await http.post(
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonEncode({'token': _token}),
      );

      if (response.statusCode == 200) {
        setState(() {
          historyData = List<Map<String, dynamic>>.from(
              jsonDecode(response.body)['data']);

          isLoading = false;
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: ${response.body}')),
        );
      }
    } catch (e) {
      print(e);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Error fetching history data')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: isLoading
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
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
                  for (var data in historyData) buildHistoryCard(data),
                ],
              ),
            ),
      bottomNavigationBar: BottomNavBar(
        currentIndex: _selectedIndex,
        onTap: _onItemTapped,
      ),
    );
  }

  Widget buildHistoryCard(Map<String, dynamic> data) {
    final sleepStart = DateTime.parse(data['sleepStart']);
    final sleepEnd = DateTime.parse(data['sleepEnd']);
    final sleepDuration = sleepEnd.isBefore(sleepStart)
        ? sleepEnd.add(Duration(days: 1)).difference(sleepStart)
        : sleepEnd.difference(sleepStart);
    final sleepHours = sleepDuration.inHours;
    final date = DateFormat('dd-MM-yyyy').format(DateTime.parse(data['date']));

    String score = '';
    if (data['score'] != null && data['score']['totalScore'] != null) {
      score = data['score']['totalScore'].toString();
      if (score.contains('.')) {
        score = score.split('.')[0]; // Take only the integer part
      }
      if (score.length > 2) {
        score = score.substring(0, 2); // Take the first two digits
      }
    }
    String name = data['score']['name'] ?? '';

    return Center(
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 8.0),
        width: MediaQuery.of(context).size.width * 1.0,
        height: 150,
        decoration: BoxDecoration(
          color: const Color(0xFFEDC4A6).withOpacity(0.25),
          borderRadius: BorderRadius.circular(30),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.2), // Shadow color
              spreadRadius: 2, // Spread radius
              blurRadius: 1, // Blur radius
              offset: const Offset(0, 3), // Offset in the x and y direction
            ),
          ],
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
                      score,
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 50,
                      ),
                    ),
                    Text(
                      name,
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 20,
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
                    buildDataRow('Height', '${data['height'] ?? ''} cm'),
                    buildDataRow('Weight', '${data['weight'] ?? ''} kg'),
                    buildDataRow('Sleep', '$sleepHours hrs'),
                    buildDataRow('Food', '${data['calorie'] ?? ''} cal'),
                  ],
                ),
              ),
            ),
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
