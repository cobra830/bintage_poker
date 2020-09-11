# Vintage Poker

Vintage Poker is a full-stack poker platform built with the MERN-stack, where a user can create an account and play poker on a predetermined set of tables (differ in amount of blinds & buy-ins). The player starts with a specific amount of virtual currency he can play with.

The server part of the application is a Node- / Express-Backend. The Frontend is a React application. Non Real-Time communication between front- & backend is handled via a REST-API. In-game logic-related communications & chat is handled via web sockets / Socket.io.

This project is currently work-in-progress.

## In-depth Project Documentation

The more detailed project documentation can be found [here](https://www.notion.so/Vintage-Poker-Working-Title-2fa245a71d374bf787a13cf39e3e08dd).

## Planned Features

These features are a must-have for the Minimal Viable Product (MVP) of this app:

- Frontend implemented with a client-side framework like React
- Backend implemented with Node & Express.js
- Functional Database Layer - MongoDB & Mongoose
- User can register & login into the frontend application
  - Password is stored encrypted in DB (!)
  - Authentication is handled via JWT-webtokens to secure API-transactions & private routes
- Basic form of Virtual Gaming Currency
  - User gets a specific amount of VGC after registration, they can use this amount to play on any open table. Should their balance drop to zero they get the same starting amount again for free.
- Basic app screens: Landing Page, Lobby (choose table etc.), Login Screen / Modal, Registration Screen / Modal, User Dashboard, Game UI
- User can join a table and play poker ⇒ full game-loop + In-game chat implemented, Functional animations to support visual gameplay experience

## Quick Start

### Add a local.env file in "./server/config" folder with the following

```
  MONGO_URI=<YOUR_MONGODB_URI>
  JWT_SECRET=<YOUR_JWT_SECRET>
  PORT=<YOUR_SERVER_PORT>
  NODE_ENV=development
  SMTP_HOST=<YOUR_SMTP_HOST>
  SMTP_PORT=<YOUR_SMTP_PORT>
  SMTP_USER=<YOUR_SMTP_USER>
  SMTP_PW=<YOUR_SMTP_PASSWORD>
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```

### Test production before deploy

```bash
NODE_ENV=production node server.js
```
