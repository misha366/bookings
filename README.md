# Bookings

## REST API Conventions

### URL Structure

```
/api/{resource}          # Collection
/api/{resource}/{id}     # Single resource
/api/{resource}/{id}/{sub-resource}
```

### HTTP Methods

| Method | URL               | Action                   |
| ------ | ----------------- | ------------------------ |
| GET    | /api/bookings     | Get all bookings         |
| GET    | /api/bookings/:id | Get single booking       |
| POST   | /api/bookings     | Create booking           |
| PUT    | /api/bookings/:id | Update booking (full)    |
| PATCH  | /api/bookings/:id | Update booking (partial) |
| DELETE | /api/bookings/:id | Delete booking           |

### Naming Rules

- Use **nouns**, not verbs: `/api/bookings` not `/api/getBookings`
- Use **plural**: `/api/users` not `/api/user`
- Use **kebab-case**: `/api/booking-slots` not `/api/bookingSlots`
- Nest related resources: `/api/users/:userId/bookings`

### Response Codes

| Code | Meaning             |
| ---- | ------------------- |
| 200  | OK                  |
| 201  | Created             |
| 204  | No Content (delete) |
| 400  | Bad Request         |
| 401  | Unauthorized        |
| 403  | Forbidden           |
| 404  | Not Found           |
| 422  | Validation Error    |
| 500  | Server Error        |

### Response Format

```json
{
  "data": { ... },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [ ... ]
  }
}
```

---

## Quick Start

```bash
# Backend (port 3001)
docker compose run --rm -p 3001:3001 npm run dev:watch -w @bookings/api

# Frontend (port 5173)
docker compose run --rm -p 5173:5173 npm run dev -w @bookings/web
```

## Commands

### Database

```bash
# Start PostgreSQL
docker compose up -d postgres

# Stop PostgreSQL
docker compose down
```

### Dependencies

```bash
# Install all
docker compose run --rm npm install

# Install for specific package
docker compose run --rm npm install -w @bookings/api
docker compose run --rm npm install -w @bookings/web

# Add dependency
docker compose run --rm npm install axios -w @bookings/api
```

### Build

```bash
# Build all
docker compose run --rm npm run build

# Build specific package
docker compose run --rm npm run build -w @bookings/api
docker compose run --rm npm run build -w @bookings/web
```

### Tests

```bash
# Run all tests
docker compose run --rm npm run test

# Run tests for specific package
docker compose run --rm npm run test -w @bookings/api
docker compose run --rm npm run test -w @bookings/web
```

### Lint

```bash
docker compose run --rm npm run lint
```

### Prisma

```bash
# Generate client
docker compose run --rm npm run db:generate -w @bookings/api

# Run migrations
docker compose run --rm npm run db:migrate -w @bookings/api

# Push schema to DB
docker compose run --rm npm run db:push -w @bookings/api
```

### Node

```bash
# Run node directly
docker compose run --rm node --version
docker compose run --rm node packages/bookings-api/dist/main.js
```
