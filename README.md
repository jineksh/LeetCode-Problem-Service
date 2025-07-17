# Problem Admin Service

The **Problem Admin Service** is a core component of the LeetCode platform backend. It is responsible for managing coding problems, including their creation, updating, deletion, and metadata management. This service ensures that problems are organized, validated, and made available for users and other services.

## Features

- **Create, update, and delete coding problems**
- **Manage problem metadata** (title, description, difficulty, tags, etc.)
- **Handle test cases** for each problem
- **Set problem visibility** (public/private)
- **API endpoints** for problem management

## Tech Stack

- **Node.js** with **Express.js** and **TypeScript**
- **MongoDB** or other database for problem storage
- **Zod** or similar for request validation
- **Docker** for containerization (optional)

## Example Endpoints

- `POST /problems` — Create a new problem
- `GET /problems` — List all problems
- `GET /problems/:id` — Get a specific problem
- `PUT /problems/:id` — Update a problem
- `DELETE /problems/:id` — Delete a problem

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Update configuration files (e.g., database connection, server port).

3. **Run the service:**
   ```bash
   npm start
   ```

## Project Structure

```
src/
  ├── config/         # Configuration files
  ├── controllers/    # Request handlers
  ├── models/         # Database models/schemas
  ├── routes/         # Express route definitions
  ├── validators/     # Request validation logic
  └── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Submit a pull
