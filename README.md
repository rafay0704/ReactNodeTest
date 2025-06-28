React & Node.js Skill Test
[![Watch Demo](https://img.shields.io/badge/Watch-Demo-blue?logo=loom)](https://www.loom.com/share/50e71ab5eb8241a0b59cb0f976e442e3?sid=d61eb457-86ab-4678-8381-b74dd62e6e69)
---
⚙️ Project Overview
This is a full-stack application built using React (client) and Node.js + Express (server) to demonstrate essential development skills:

- 🔐 User authentication with email/password  
- 📅 CRUD operations for a "Meeting" feature via RESTful APIs  
- 🦊 MetaMask Wallet integration as a precondition for sign-in  
- 🎨 Clean, responsive UI using Chakra UI

The app is structured to showcase clean code, maintainability, and modern best practices.

📌 Task Summary
1. Authentication
   - Sign in using email and password
   - MetaMask wallet connection is required before authentication

2. Meeting Feature
   - Full CRUD operations (Create, Read, Update, Delete) on meetings
   - Backed by a MongoDB database and exposed via secure REST API

3. Wallet Integration
   - Uses ethers.js to detect and connect MetaMask wallet
   - Wallet address must be connected before proceeding with login

✅ Test Credentials
Use the following credentials to log in:

Email: admin@gmail.com  
Password: admin123

🚀 Installation & Setup
1. Clone the Repository
git clone https://github.com/rafay0704/ReactNodeTest.git
cd ReactNodeTest

2. Backend Setup (Node.js API)
Open the first terminal:

cd Server
npm install
npm start

The backend will start on http://localhost:5000 by default.

3. Frontend Setup (React App)
Open a second terminal:

cd Client
npm install

Create a .env file in the Client folder:
REACT_APP_BASE_URL=http://127.0.0.1:5000

Then start the React app:
npm start

🧩 Features Implemented
- 🔐 Authentication
  - Validates email/password with backend API
  - Only accessible after MetaMask wallet connection

- 🦊 MetaMask Wallet Connect
  - Requires users to connect their wallet before signing in
  - Uses ethers.js for wallet connection

- 📅 Meeting Management
  - Create, view, update, delete meeting records
  - Each meeting supports PDF generation and viewing

- 💡 Clean & Responsive UI
  - Chakra UI used for consistent, mobile-first design
  - Responsive modals and form validation

📽 Demo Video
👉 Watch the demo: https://www.loom.com/share/50e71ab5eb8241a0b59cb0f976e442e3?sid=d61eb457-86ab-4678-8381-b74dd62e6e69

📁 Folder Structure
ReactNodeTest/
├── Client/          # React frontend
│   └── src/
│       └── components/
│       └── pages/
├── Server/          # Node.js + Express backend
│   └── controllers/
│   └── routes/
│   └── models/
└── README.md

🛠️ Tech Stack
- Frontend: React, Chakra UI, Axios, Ethers.js
- Backend: Node.js, Express, MongoDB, JWT
- Wallet: MetaMask integration using Ethers.js
- PDF: PDF download and view functionality for meetings


Abdul Rafay   
📧 rafay0704@gmail.com

