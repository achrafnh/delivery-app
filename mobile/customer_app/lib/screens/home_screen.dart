import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../services/api_service.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});
  @override
  Widget build(BuildContext context) {
    final api = Provider.of<ApiService>(context);
    return Scaffold(
      appBar: AppBar(title: const Text("Restaurants")),
      body: FutureBuilder(
        future: api.fetchRestaurants(),
        builder: (context, snapshot) {
          if (!snapshot.hasData) return const Center(child: CircularProgressIndicator());
          final restaurants = snapshot.data!;
          return ListView.builder(
            itemCount: restaurants.length,
            itemBuilder: (context, index) {
              final r = restaurants[index];
              return ListTile(title: Text(r['name']), subtitle: Text(r['address']));
            },
          );
        },
      ),
    );
  }
}
