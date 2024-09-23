# GYM System - MERN Stack Application

Welcome to the **GYM System** - a full-stack MERN (MongoDB, Express.js, React, Node.js) application.

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation Instructions](#installation-instructions)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Set up Environment Variables](#3-set-up-environment-variables)
  - [4. Run the Backend Server](#4-run-the-backend-server)
  - [5. Run the Frontend](#5-run-the-frontend)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a **GYM Management System** that allows users to manage gym members, subscriptions, and track gym-related activities. It's built using the MERN stack, with a separate backend and frontend structure.

### Technologies Used

- **MongoDB**: NoSQL database for storing data.
- **Express.js**: Backend framework for building APIs.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: Runtime environment for executing JavaScript on the server side.

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: [Download here](https://nodejs.org/)
- **npm**: Comes with Node.js installation, but you can verify using `npm -v`.

---

## Installation Instructions

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/DYNAC-Solutions/GYM-System-MERN.git
```

Navigate into the project directory:

```bash
cd GYM-System-MERN
```

### 2. Install Dependencies

There are separate dependencies for the backend and frontend.

#### Backend (Node.js + Express)

Navigate to the `backend` folder and install the backend dependencies:

```bash
cd backend
npm install
```

#### Frontend (React.js)

Navigate to the `frontend` folder and install the frontend dependencies:

```bash
cd ../frontend
npm install
```

### 3. Set up Environment Variables ( Optional )

> ⚠️ **Warning:** Since this project has online mongo database skip this step.

Create a `.env` file inside the `backend` directory and add the following environment variables:

```env
MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your JWT Secret Key>
PORT=5000
```

Ensure you have the correct MongoDB connection string for the online server and a JWT secret key.

### 4. Run the Backend Server

To start the backend server, navigate to the `backend` directory:

```bash
cd backend
npm run dev
```

The backend server will be running on [http://localhost:5000](http://localhost:5000) (or the port you specified in your `.env` file).

### 5. Run the Frontend

To start the React frontend, navigate to the `frontend` directory:

```bash
cd ../frontend
npm start
```

The React app will be running on [http://localhost:3000](http://localhost:3000).

---

## Contributing

We welcome contributions! Please fork this repository and submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

This version removes the need for a local MongoDB setup and assumes an online MongoDB connection string.
