class Package {
  final String id;
  final String name;
  final String description;
  final double price;
  final int durationMinutes;
  final String status;

  Package({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.durationMinutes,
    required this.status,
  });

  factory Package.fromJson(Map<String, dynamic> json) {
    return Package(
        id: json["id"],
        name: json["name"],
        description: json["description"],
        price: json["price"].toDouble(),
        durationMinutes: json["duration_minutes"],
        status: json["status"]);
  }
}
