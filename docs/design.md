# System Design Document

## Wellness Package Management System

## 1. Problem Framing & Scope

### Goal

Build a simple end-to-end system to manage and display wellness packages across:

- Admin Portal (web)
- Backend API (NestJS)
- Mobile App (Flutter)

The system must demonstrate:

- Clean architecture thinking
- API design clarity
- Maintainable code structure
- AI-assisted development workflow

---

### In-Scope

Implemented features:

- Create wellness package (admin)
- Update wellness package (admin)
- Delete wellness package (admin)
- List wellness packages (admin + mobile)
- Simple REST API integration
- SQLite persistence

---

### Out of Scope (Intentional)

To keep scope small and focus on architecture:

- Authentication / Authorization
- Pagination / filtering
- Search functionality
- File upload (images)
- Payment system
- Role-based access control
- Production deployment

---

### Assumptions

- Single admin user (no multi-role system needed)
- Small dataset (SQLite is sufficient)
- No high concurrency requirements
- Mobile app is read-only (no mutations)
- System is internal / demo-level

---

## 2. System Architecture

### High Level Architecture

```text id="arch1"
[ Admin Portal (Next.js) ]        [ Mobile App (Flutter) ]
                \                          /
                 \                        /
                  →  [ NestJS Backend API ]
                             ↓
                      [ SQLite Database ]
```

---

### Backend Architecture (Clean Architecture)

```text id="arch2"
Controller Layer
    ↓
Use Case Layer (Application Logic)
    ↓
Domain Layer (Entities + Interfaces)
    ↓
Infrastructure Layer (Prisma DB)
```

---

### Folder Structure Strategy

Backend is structured as:

- `app/` → Controllers (HTTP layer)
- `use-cases/` → Business logic per action
- `domain/` → Core entities & repository contracts
- `infrastructure/` → Prisma implementation
- `modules/` → Dependency injection wiring

---

### Shared Concerns

- DTO validation → `class-validator`
- Error handling → NestJS exceptions
- API contracts → shared DTOs
- Type safety → TypeScript strict mode

---

## 3. Data Model & API Design

### Core Entity: WellnessPackage

```ts id="model1"
{
  id: string;
  name: string;
  description: string;
  price: number;
  duration_minutes: number;
  status: string;
  created_at: Date;
  updated_at: Date;
}
```

---

### Design Decisions

- `id` → UUID for scalability
- `price` → number (no currency complexity)
- `duration_minutes` → integer for simplicity
- `status` → string for future extensibility

---

## API Endpoints

### Mobile API

#### GET /mobile/packages

Returns all packages for end users.

---

### Admin API

#### GET /admin/packages

Get all packages

#### POST /admin/packages

Create package

#### PUT /admin/packages/:id

Update package

#### DELETE /admin/packages/:id

Delete package

---

### Example Request

```json id="req1"
{
  "name": "Yoga Package",
  "description": "Morning yoga session",
  "price": 150000,
  "duration_minutes": 60
}
```

---

### Example Response

```json id="res1"
{
  "id": "uuid",
  "name": "Yoga Package",
  "description": "Morning yoga session",
  "price": 150000,
  "duration_minutes": 60,
  "status": "active"
}
```

---

## 4. Key Technical Decisions & Trade-offs

### 1. SQLite instead of MySQL

**Decision:** Use SQLite
**Reason:** Faster setup for assessment
**Trade-off:** Not production scalable

---

### 2. Clean Architecture (simplified)

**Decision:** Use layered architecture (Controller → Use Case → Domain)
**Reason:** Demonstrate structure thinking
**Trade-off:** More boilerplate than MVC

---

### 3. Prisma ORM

**Decision:** Use Prisma
**Reason:** Type-safe DB access, fast development
**Trade-off:** Less control over raw SQL

---

### 4. No Authentication

**Decision:** Skip auth layer
**Reason:** Focus on system design, not security
**Trade-off:** Not production-ready

---

### 5. Separate Admin & Mobile APIs

**Decision:** Different endpoints (`/admin` vs `/mobile`)
**Reason:** Clear separation of concerns
**Trade-off:** Slight duplication

---

## 5. AI-Assisted Development Workflow

### Tools Used

- ChatGPT → architecture + code generation
- Cursor → code refinement
- Copilot → boilerplate suggestions

---

### How AI Was Used

- Generate initial NestJS structure
- Create use-case scaffolding
- Build DTOs and validation rules
- Generate Flutter UI components
- Debugging runtime errors (CORS, networking)

---

### Example Prompt 1

```text id="prompt1"
Generate a NestJS clean architecture CRUD module using Prisma with separation of controller, use case, and repository.
```

Result:

- Clean folder structure
- Repository abstraction
- Use-case based design

---

### Example Prompt 2

```text id="prompt2"
Create a Flutter screen that fetches REST API data and displays a list with loading and error states.
```

Result:

- Working FutureBuilder implementation
- Basic UI rendering logic

---

### AI Mistake Example

Issue:

- AI initially used `localhost` in Flutter Android emulator

Fix:

- Corrected to `10.0.2.2`

Lesson:

- Always validate environment-specific assumptions

---

### Where AI Was NOT Used

- Final architecture decisions
- API contract design
- Trade-off decisions
- Debugging runtime issues

Reason:

- These require system-level understanding, not code generation

---

## 6. Future Improvements

If this were production-ready:

- Add authentication (JWT / OAuth)
- Pagination + filtering
- Logging (Winston / Pino)
- Docker setup
- CI/CD pipeline
- Monitoring (Prometheus)
- API versioning
- Rate limiting
- Unit + integration tests

---

## Conclusion

This project demonstrates:

- Full-stack system thinking
- Clean architecture implementation
- API design capability
- AI-assisted engineering workflow
- Ability to ship working vertical slice quickly

The focus was not feature completeness, but **clarity of design, structure, and execution speed using AI tools**.
