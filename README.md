# 📊 Finance Dashboard (MERN Stack)

A modern **Finance Dashboard application** built using the MERN stack.  
This project provides real-time analytics for KPIs, products, and transactions with a clean and responsive UI.

---

## 👨‍💻 Author
**Shivam Shekhar**

---

## 🖼️ Project Preview

### 🏠 Dashboard View 1
![Dashboard View 1](./client/src/assets/homepage1.png)

### 🏠 Dashboard View 2
![Dashboard View 2](./client/src/assets/homepage2.png)

---

## 🚀 Tech Stack

### Frontend
- React + TypeScript (Vite)
- Material UI (MUI)
- Redux Toolkit Query
- Recharts (Data Visualization)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

---

## 📁 Project Structure


finance-dashboard/
│
├── client/ # Frontend (React + Vite)
├── server/ # Backend (Node + Express)
│ ├── models/
│ ├── routes/
│ ├── data/
│ └── index.js
│
└── README.md


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash id="p1q8wz"
git clone <your-repo-url>
cd finance-dashboard
2️⃣ Backend Setup
cd server
npm install

Create a .env file:

MONGO_URL=mongodb://127.0.0.1:27017/finance-dashboard
PORT=5000

Run backend:

npm start

Server runs at:

http://localhost:5000
3️⃣ Frontend Setup
cd client
npm install

Create a .env file:

VITE_BASE_URL=http://localhost:5000

Run frontend:

npm run dev

Frontend runs at:

http://localhost:5173
📊 Features
📈 KPI Analytics Dashboard
📦 Product Tracking System
💰 Transaction Management
📊 Interactive Charts
⚡ Real-time API Integration
🎨 Modern Responsive UI
🔌 API Endpoints
KPI Data
GET /kpi/kpis
Products
GET /product/products
Transactions
GET /transaction/transactions
🧠 Notes
Database auto-seeds on first backend run
Ensure MongoDB is running locally
Frontend uses Redux Toolkit Query for API handling
Fully responsive UI
🛠️ Common Issues
❌ "Cannot GET /kpi"

✔ Ensure backend is running on port 5000
✔ Check .env file in server directory

❌ Empty UI Data

✔ Verify VITE_BASE_URL in frontend .env
✔ Ensure backend is running properly

🎯 Purpose

This project was built for:

Learning full-stack MERN development
Understanding dashboard UI design
Working with real-world API integration
Practicing modern frontend architecture
📌 License

This project is open-source and created for learning purposes.

⭐ Thank You

Made with dedication by Shivam Shekhar 🚀


---

If you want next level upgrade, I can also:
✔ add GitHub badges (stars, forks, tech icons)  
✔ make it look like a **top 1% developer README**  
✔ or help you deploy it online (Vercel + Render) 🚀
