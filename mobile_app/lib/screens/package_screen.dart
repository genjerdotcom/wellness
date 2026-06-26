import 'package:flutter/material.dart';
import '../models/package.dart';
import '../services/package_service.dart';
import '../widgets/package_card.dart';

class PackageScreen extends StatefulWidget {
  const PackageScreen({super.key});

  @override
  State<PackageScreen> createState() => _PackageScreenState();
}

class _PackageScreenState extends State<PackageScreen> {
  final service = PackageService();

  late Future<List<Package>> packages;
  @override
  void initState() {
    super.initState();
    packages = service.getPackages();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(title: const Text("Wellness Packages")),
        body: FutureBuilder(
            future: packages,
            builder: (context, snapshot) {
              if (snapshot.connectionState == ConnectionState.waiting) {
                return const Center(child: CircularProgressIndicator());
              }

              if (snapshot.hasError) {
                return Center(child: Text(snapshot.error.toString()));
              }

              final items = snapshot.data!;

              return ListView.builder(
                  itemCount: items.length,
                  itemBuilder: (context, index) {
                    return PackageCard(package: items[index]);
                  });
            }));
  }
}
