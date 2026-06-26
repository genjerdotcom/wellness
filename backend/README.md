# Wellness Backend API

Backend API for the Wellness Package Management System built using NestJS, TypeScript, Prisma, and SQLite.

## Tech Stack

- Node v24.16.0 <=
- NestJS
- TypeScript
- Prisma ORM
- SQLite
- Swagger
- Class Validator
- Clean Architecture

---

## Project Structure

```text
src/

├── app
│   └── controllers
│       └── package.controller.ts
│
├── domain
│   ├── entities
│   └── repositories
│
├── infrastructure
│   └── database
│       └── prisma
│
├── use-cases
│   ├── create-package
│   ├── get-packages
│   ├── update-package
│   └── delete-package
│
├── modules
│   └── package.module.ts
│
├── app.module.ts
└── main.ts
```

---

## Architecture

This backend follows a simplified Clean Architecture pattern:

- Controllers → Handle HTTP requests
- Use Cases → Application logic
- Domain → Business entities and abstractions
- Infrastructure → Database implementation using Prisma

Benefits:

- Separation of concerns
- Easier testing
- Replaceable infrastructure
- Better scalability

---

## Features

Implemented:

- Wellness package CRUD
- Mobile package listing endpoint
- Repository abstraction
- DTO validation
- Swagger documentation
- SQLite persistence

Not implemented:

- Authentication
- Authorization
- Search
- Pagination
- File upload
- Logging
- Unit tests

---

## API Endpoints

### Mobile API

#### Get active packages

```http
GET /mobile/packages
```

Response:

```json
[
  {
    "id": "123",
    "name": "Ginanjar Package",
    "description": "Morning Ginanjar",
    "price": 150000,
    "duration_minutes": 60,
    "status": "active"
  }
]
```

---

### Admin API

#### Get packages

```http
GET /admin/packages
```

#### Create package

```http
POST /admin/packages
```

Request:

```json
{
  "name": "Ginanjar Package",
  "description": "Morning Ginanjar",
  "price": 150000,
  "duration_minutes": 60
}
```

---

#### Update package

```http
PUT /admin/packages/:id
```

---

#### Delete package

```http
DELETE /admin/packages/:id
```

---

## Installation

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create:

```text
.env
```

Add:

```env
DATABASE_URL="file:./dev.db"
```

---

## Database Setup

Run migration:

```bash
npx prisma migrate dev --name init
```

Generate Prisma client:

```bash
npx prisma generate
```

---

## Run Project

Development:

```bash
npm run start:dev
```

Production:

```bash
npm run build
npm run start:prod
```

---

## Swagger Documentation

Open:

```text
http://localhost:3000/api
```

---

## Future Improvements

- MySQL migration
- Authentication
- Docker support
- CI/CD
- Unit tests
- Monitoring
- Logging
