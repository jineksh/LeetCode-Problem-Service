This repository contains the Problem Service for the coding platform. It manages the creation, storage, retrieval, and management of coding problems (like Leetcode/Codeforces-style problems)

## Folder Structure
src/
├── controllers/     // Route handlers for problem-related requests
├── services/        // Business logic
├── repositories/    // DB access and queries
├── models/          // Mongoose schemas/models
├── routes/          // API route definitions
├── utils/           // Utility functions (e.g., AppError)
├── errors/          // Error classes and middleware
├── config/          // Config files (e.g., DB connection)

## Features
Add, update, delete coding problems.
Support for markdown-based problem statements.
Retrieve problems by ID or list all problems.
Handle the error in Proper way.

