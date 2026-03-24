# ✈️ Airline Management System

A RESTful backend API for managing airline operations — cities, airports, airplanes, and flights — built with a clean layered architecture.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| Framework | Express.js v5 |
| ORM | Sequelize v6 |
| Database | MySQL (via mysql2) |
| Dev Server | Nodemon |
| Config | dotenv |

---

## 🏗️ Architecture

```
Controllers → Services → Repositories → Sequelize Models → MySQL
```

- **Controllers** — handle HTTP req/res, delegate to services
- **Services** — business logic layer (e.g. departure/arrival time validation, auto-populating `totalSeats` from airplane capacity)
- **Repositories** — data access layer, all DB queries live here
- **CrudRepository** — generic base class extended by Airport and other repositories
- **Middlewares** — request validation before hitting the controller (e.g. flight field checks)

---

## 📁 Project Structure

```
src/
├── controllers/       # Route handlers
├── services/          # Business logic
├── repositories/      # DB access (CRUD base + entity-specific)
├── models/            # Sequelize model definitions
├── routes/v1/         # Versioned API routes
├── middlewares/       # Express middleware (validation)
├── migrations/        # Sequelize CLI schema migrations
├── seeders/           # Seed data (airports, airplanes)
└── utils/             # Error codes, helper functions
```

---

## 🗄️ Data Models

### City
- `name` — unique, string

### Airport
- `name`, `address`, `cityId` → **belongsTo** City (CASCADE delete)

### Airplane
- `modelNumber`, `capacity` (default: 200)

### Flights
- `flightNumber` (unique), `airplaneID`, `departureAirportId`, `arrivalAirportId`
- `departureTime`, `arrivalTime`, `price`, `boardingGate`, `totalSeats`
- `totalSeats` auto-set from linked airplane's capacity on creation

---

## 🔌 API Endpoints

### Cities
```
POST   /api/v1/city
GET    /api/v1/city?name=<prefix>
GET    /api/v1/city/:id
PATCH  /api/v1/city/:id
DELETE /api/v1/city/:id
```

### Airports
```
POST   /api/v1/airport
```

### Flights
```
POST   /api/v1/flight      ← validated by middleware
GET    /api/v1/flight/:id
GET    /api/v1/flights?departureAirportId=&arrivalAirportId=&minprice=&maxprice=
PATCH  /api/v1/flight/:id
```

---

## ⚙️ Key Implementation Details

- **Flight filtering** — `FlightRepository` uses Sequelize `Op.gte` / `Op.lte` for price range filtering and direct equality checks for airport IDs
- **Time validation** — `FlightService` rejects flights where `departureTime > arrivalTime` using a `compareTime` utility
- **Middleware validation** — `validateCreateFlight` checks all required fields, returns `400` with error message before the controller is reached
- **Frozen error codes** — `ClientErrors`, `ServerErrors`, `SuccesCodes` are `Object.freeze()`-d constants used across controllers
- **Schema sync** — `db.sequelize.sync({ alter: true })` runs only when `SYNC_DB` env var is set

---

## 🚀 Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Set DB_HOST, DB_USER, DB_PASS, DB_NAME, PORT

# Run migrations
npx sequelize-cli db:migrate

# Seed data
npx sequelize-cli db:seed:all

# Start dev server
npm start
```

---

## 📦 Dependencies

```json
"express":       "^5.2.1",
"sequelize":     "^6.37.7",
"mysql2":        "^3.16.0",
"sequelize-cli": "^6.6.3",
"dotenv":        "^17.2.3",
"nodemon":       "^3.1.11",
"body-parser":   "^2.2.1"
```
