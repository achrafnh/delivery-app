import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/api_service.dart';

class OrdersScreen extends StatelessWidget {
  const OrdersScreen({super.key});
  @override
  Widget build(BuildContext context) {
    final api = Provider.of<ApiService>(context);
    return Scaffold(
      appBar: AppBar(title: const Text("Assigned Orders")),
      body: FutureBuilder(
        future: api.fetchDriverOrders(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return const Center(child: CircularProgressIndicator());
          final orders = snapshot.data!;
          return ListView.builder(
            itemCount: orders.length,
            itemBuilder: (context, index) {
              final o = orders[index];
              return Card(
                child: ListTile(
                  title: Text("Order #${o['_id']}"),
                  subtitle: Text("Status: ${o['status']}"),
                  trailing: ElevatedButton(
                    onPressed: () => api.updateStatus(o['_id'], "delivered"),
                    child: const Text("Mark Delivered"),
                  ),
                ),
              );
            },
          );
        },
      ),
    );
  }
}
