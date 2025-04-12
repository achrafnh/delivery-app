import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;

class ApiService with ChangeNotifier {
  final storage = const FlutterSecureStorage();
  String? token;

  Future<bool> login(String email, String password) async {
    final res = await http.post(
      Uri.parse('http://localhost:3000/api/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({'email': email, 'password': password}),
    );
    if (res.statusCode == 200) {
      final data = jsonDecode(res.body);
      token = data['token'];
      await storage.write(key: 'token', value: token);
      return true;
    }
    return false;
  }

  Future<List<dynamic>> fetchDriverOrders() async {
    token ??= await storage.read(key: 'token');
    final res = await http.get(
      Uri.parse('http://localhost:3000/api/orders'),
      headers: {'Authorization': 'Bearer $token'},
    );
    if (res.statusCode == 200) {
      List allOrders = jsonDecode(res.body);
      return allOrders.where((o) => o['status'] != 'delivered').toList();
    }
    return [];
  }

  Future<void> updateStatus(String orderId, String status) async {
    token ??= await storage.read(key: 'token');
    await http.patch(
      Uri.parse('http://localhost:3000/api/orders/$orderId/status'),
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json'
      },
      body: jsonEncode({'status': status}),
    );
    notifyListeners();
  }
}
