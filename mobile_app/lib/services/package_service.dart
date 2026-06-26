import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/package.dart';

class PackageService {
  Future<List<Package>> getPackages() async {
    final response =
        await http.get(Uri.parse("http://localhost:3000/mobile/packages"));

    if (response.statusCode == 200) {
      final List data = json.decode(response.body);
      return data.map((e) => Package.fromJson(e)).toList();
    }

    throw Exception("Failed");
  }
}
