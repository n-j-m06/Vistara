# ⚙️ Vistara Backend

The backend of Vistara powers authentication, tourism management, MongoDB integration, and scalable API architecture for the tourism discovery platform.

Built with Node.js, Express, and MongoDB, the backend is designed to support future scalability and dynamic tourism content management.

---

# ✨ Backend Features

## 🔐 Authentication System
- User Signup
- User Login
- Password hashing using bcryptjs
- MongoDB user storage

---

## 🛠️ Admin Management APIs
- Add tourism states
- Fetch tourism states
- Delete tourism states

---

## 🌐 REST API Architecture
- Modular route structure
- Controller-based architecture
- MongoDB integration using Mongoose

---

# ⚙️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- dotenv
- cors
- nodemon

---

# 📂 Backend Structure

```bash
backend/
│
├── controllers/
│   ├── authController.js
│   └── stateController.js
│
├── models/
│   ├── User.js
│   └── State.js
│
├── routes/
│   ├── authRoutes.js
│   └── stateRoutes.js
│
├── server.js
├── .env
└── package.json
```

---

# 🚀 Backend Setup

## Install Dependencies

```bash
npm install
```

---

## Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## Start Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 🌐 API Endpoints

## Authentication

### Signup

```http
POST /api/auth/signup
```

### Login

```http
POST /api/auth/login
```

---

## Tourism State Management

### Get All States

```http
GET /api/states/all
```

### Add State

```http
POST /api/states/add
```

### Delete State

```http
DELETE /api/states/delete/:id
```

---

# ✨ Backend Highlights

- ES Module architecture
- MongoDB Atlas integration
- Scalable REST APIs
- Full-stack compatible architecture
- Modular backend structure

---

# 📸 Future Enhancements

- JWT authentication
- Admin authorization middleware
- Image uploads
- Dynamic dashboard rendering
- AI recommendation engine

---

# 🇮🇳 Vistara Backend
### *Explore India. Experience Infinity.*
