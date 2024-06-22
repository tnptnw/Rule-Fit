import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:rule_fit/Token/token_manager.dart';
import 'dart:convert';
import 'package:intl/intl.dart';

class HistoryPage extends StatefulWidget {
  @override
  _HistoryPageState createState() => _HistoryPageState();
}

class _HistoryPageState extends State<HistoryPage> {
  List<Map<String, dynamic>> historyData = [];
  bool isLoading = true;
  String? _token;

  @override
  void initState() {
    super.initState();
    _loadToken();
  }

  Future<void> _loadToken() async {
    String? token = await TokenManager().getToken();
    if (token == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Error: Token not available')),
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
        SnackBar(content: Text('Error: Token is null')),
      );
      return;
    }

    final url = Uri.parse('http://localhost:4000/history/getHistory');

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
        SnackBar(content: Text('Error fetching history data')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: isLoading
          ? Center(child: CircularProgressIndicator())
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
    );
  }

  Widget buildHistoryCard(Map<String, dynamic> data) {
    final sleepStart = DateTime.parse(data['sleepStart']);
    final sleepEnd = DateTime.parse(data['sleepEnd']);
    final sleepHours = sleepEnd.difference(sleepStart).inHours;
    final date = DateFormat('dd-MM-yyyy').format(DateTime.parse(data['date']));

    return Center(
      child: Container(
        margin: const EdgeInsets.symmetric(vertical: 8.0),
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
                      '${data['scoreId'] ?? ''}',
                      style: const TextStyle(
                        color: Colors.black,
                        fontSize: 50,
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
