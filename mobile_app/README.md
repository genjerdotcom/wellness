# Wellness Mobile App

Mobile application for the Wellness Package Management System built using Flutter.

This application consumes the backend API and displays wellness packages for end users.

## Tech Stack

- Flutter
- Dart
- HTTP package
- Material Design

---

## Features

Implemented:

- Fetch wellness packages from backend API
- Display package list
- Loading state
- Error state
- Reusable components

Not implemented:

- Authentication
- Search
- Pagination
- Package details page
- Favorites
- Offline caching

---

## Project Structure

```text
lib/

├── models
│   └── package.dart
│
├── services
│   └── package_service.dart
│
├── screens
│   └── package_screen.dart
│
├── widgets
│   └── package_card.dart
│
└── main.dart
```

---

## Architecture

The mobile app follows a simple layered architecture:

```text
UI Layer
    ↓

Screen Layer
    ↓

Service Layer
    ↓

Backend API
```

Responsibilities:

- Models → Define data structures
- Services → Handle API communication
- Screens → Handle page logic
- Widgets → Reusable UI components

---

## Setup

Install dependencies:

```bash
flutter pub get
```

---

## Backend Requirement

Backend API must be running:

```text
http://localhost:3000
```

Swagger:

```text
http://localhost:3000/api
```

---

## API Endpoint

Application consumes:

```http
GET /mobile/packages
```

Example response:

```json
[
  {
    "id": "1",
    "name": "Ginanjar Package",
    "description": "Morning Ginanjar session",
    "price": 150000,
    "duration_minutes": 60,
    "status": "active"
  }
]
```

---

## API Configuration

Open:

```text
lib/services/package_service.dart
```

For Flutter Web:

```dart
Uri.parse(
  "http://localhost:3000/mobile/packages"
)
```

For Android Emulator:

```dart
Uri.parse(
  "http://10.0.2.2:3000/mobile/packages"
)
```

For iOS Simulator:

```dart
Uri.parse(
  "http://localhost:3000/mobile/packages"
)
```

---

## Android Permission

Open:

```text
android/app/src/main/AndroidManifest.xml
```

Add:

```xml
<uses-permission
android:name="android.permission.INTERNET"/>
```

before:

```xml
<application>
```

---

## Run Application

Run for Chrome:

```bash
flutter run -d chrome
```

Run for Android Emulator:

```bash
flutter run
```

Run for macOS:

```bash
flutter run -d macos
```

---

## Example User Flow

1. User opens application

2. Application requests package data from backend

3. Backend returns package list

4. Package data is rendered on screen

5. User browses available wellness packages

---

## Future Improvements

- State management (Provider / Riverpod)
- Authentication
- Pagination
- Search
- Pull to refresh
- Package details page
- Offline support
- Better UI/UX

---

## Screenshots

Home Screen:

(Add screenshot)

Loading State:

(Add screenshot)

Error State:

(Add screenshot)
