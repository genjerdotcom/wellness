import 'package:flutter/material.dart';
import '../models/package.dart';

class PackageCard
extends StatelessWidget{
  final Package package;
  const PackageCard({
    super.key,
    required this.package

  });

  @override
  Widget build(
      BuildContext context
  ){

    return Card(
      child:Padding(
        padding:
        const EdgeInsets.all(16),
        child:Column(
          crossAxisAlignment:
          CrossAxisAlignment.start,
          children:[
            Text(
              package.name,
              style:
              const TextStyle(
                fontSize:18,
                fontWeight:
                FontWeight.bold
              )
            ),

            const SizedBox(
              height:8
            ),

            Text(
              package.description
            ),

            const SizedBox(
              height:8
            ),

            Text(
              "Price: ${package.price}"
            ),

            Text(
              "Duration: ${package.durationMinutes} minutes"
            )
          ]
        )
      )
    );
  }
}