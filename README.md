# Alpha AI - Full-Stack AI Chat Application

A full-stack chatbot application that lets users chat with Google's Gemini AI. The backend is built with Node.js, Express, and MongoDB, and stores conversations as persistent, retrievable threads.

## Features

- 💬 Chat with an AI model (Gemini) through a simple REST API
- 🧵 Conversations are organized into **threads**, each with its own ID and title
- 🗄️ Messages and threads are persisted in MongoDB via Mongoose
- 📜 Retrieve all past threads (sorted by most recently updated) or a single thread by ID
- 🔌 CORS-enabled API, ready to be consumed by a separate frontend

## Tech Stack

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Gemini API (called through a lightweight fetch-based utility)
- dotenv for environment configuration
- CORS

**Frontend**
- (Add details here — e.g. React, plain HTML/CSS/JS, etc.)

## Project Structure

```
gemini/
├── backend/
│   ├── models/
│   │   └── Thread.js       # Mongoose schemas for threads & messages
│   ├── routes/
│   │   └── chat.js         # API routes for creating/fetching threads & chatting
│   ├── utils/
│   │   └── genai.js        # Handles calls to the Gemini API
│   ├── server.js           # Express app entry point
│   ├── package.json
│   └── .env                # Environment variables (not committed)
└── frontend/                # Client application
```

## Data Model

Each **Thread** represents a conversation and contains:
- `threadId` — unique identifier for the thread
- `title` — thread title (defaults to `"New Chat"`)
- `messages` — an array of messages, each with:
  - `role` — `"user"` or `"assistant"`
  - `content` — the message text
  - `timestamp`
- `createdAt` / `updatedAt` timestamps

## API Endpoints

| Method | Endpoint             | Description                                  |
|--------|-----------------------|-----------------------------------------------|
| GET    | `/api/thread`          | Get all threads (most recently updated first) |
| GET    | `/api/thread/:threadId`| Get a single thread by its ID                 |
| POST   | `/api/test`             | Create a sample thread (used for testing)     |

> Additional chat endpoints (e.g. sending a message and getting an AI reply) live in `routes/chat.js` — update this table as new routes are added.

## Getting Started

### Prerequisites
- Node.js installed
- A MongoDB instance (local or Atlas)
- A Gemini API key

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/amitjadhav93/gemini.git
   cd gemini/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder:
   ```env
   PORT=8080
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=your_gemini_api_key
   ```

4. Start the server
   ```bash
   node server.js
   ```

   The server will run at `http://localhost:8080`.
