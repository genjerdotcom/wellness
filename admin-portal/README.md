# Wellness Admin Portal

Admin Portal for Wellness Package Management System built using Next.js and TypeScript.

## Tech Stack

- Node v24.16.0 <=
- Next.js
- TypeScript
- Tailwind CSS
- Axios

---

## Features

Implemented:

- Package listing
- Create package
- Update package
- Delete package
- API integration with backend

Not implemented:

- Authentication
- Search
- Pagination
- Loading states
- Notifications

---

## Project Structure

```text
src/

├── app
│   ├── page.tsx
│   ├── create
│   │   └── page.tsx
│   │
│   └── edit
│       └── [id]
│           └── page.tsx
│
├── components
│   ├── PackageForm.tsx
│   └── PackageTable.tsx
│
├── services
│   └── package.service.ts
│
├── lib
│   └── api.ts
│
└── types
    └── package.ts
```

---

## Setup

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create:

```text
.env.local
```

Add:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## Run Project

Development:

```bash
npm run dev
```

Open:

```text
http://localhost:3001
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

## Workflow

Admin Portal communicates directly with the backend REST API.

Flow:

```text
Admin User
      ↓
Next.js Admin Portal
      ↓
NestJS API
      ↓
SQLite Database
```

---

## Example User Flow

1. Open package list page

2. Create package

3. Submit form

4. Data stored through API

5. Package displayed in list

6. Edit package

7. Delete package

---

## Future Improvements

- Authentication
- Better form validation
- Search
- Pagination
- Toast notifications
- Global state management
- Docker support
