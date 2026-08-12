# chatApp

A simple real-time chat application built with **Express** and **Socket.IO**.

## Overview

This project is a lightweight chat server that lets multiple users connect and exchange messages instantly using WebSockets, powered by Socket.IO. Express serves the static front-end files, and `moment` is used for formatting message timestamps.

## Tech Stack

- **[Express](https://expressjs.com/)** — web server / static file serving
- **[Socket.IO](https://socket.io/)** — real-time, bidirectional communication
- **[Moment.js](https://momentjs.com/)** — timestamp formatting
- **Node.js** (CommonJS)

## Project Structure

```
chatApp/
├── public/            # Static front-end assets (HTML/CSS/JS served to the client)
├── app.js             # Main server entry point (Express + Socket.IO setup)
├── package.json
├── package-lock.json
└── .gitignore
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LavishMehta35/chatApp.git
   cd chatApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the server with:

```bash
npm run dev
```

This runs `node app.js`. By default the app should be accessible at:

```
http://localhost:3000
```

(Check `app.js` for the exact port if it differs.)

## How It Works

- The Express server serves the static client files from the `public` directory.
- When a client connects, Socket.IO establishes a WebSocket connection.
- Messages sent by a client are broadcast in real time to other connected users.
- `moment` is used to timestamp messages as they're sent/received.

## License

This project is licensed under the **ISC License**.
