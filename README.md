# 📚 Library Management System — Full Stack Project

A complete full-stack Library Management System using **React + Vite + Tailwind CSS** for frontend and **Express + MongoDB** for backend. It includes Book CRUD, Borrow system, Aggregated summary, Validation, Toast notifications, and Dark Mode.

---

## 🌐 Live Links

- 🔗 **Frontend (Vercel)**: [https://library-frontend-kappa-five.vercel.app](https://your-frontend.vercel.app)
- 🔗 **Backend (Vercel)**: [https://library-management-api-vert.vercel.app](https://library-management-api-vert.vercel.app)

---

## 🚀 Features

- ✅ Book Create, Read, Update, Delete
- ✅ Borrow book (with quantity and due date)
- ✅ Borrow summary (aggregated by book)
- ✅ Form validation using Zod
- ✅ Toast notification using react-hot-toast
- ✅ Dark mode toggle 🌗
- ✅ Responsive UI with Tailwind & Shadcn UI
- ✅ CORS configured for frontend-backend communication

---

## 🧰 Tech Stack

| Layer     | Tech                            |
|-----------|---------------------------------|
| Frontend  | React + Vite + TypeScript       |
| Styling   | Tailwind CSS                    |
| Form      | react-hook-form + zod           |
| Toast     | react-hot-toast                 |
| Backend   | Express.js + TypeScript         |
| Database  | MongoDB Atlas                   |
| API Calls | Axios                           |
| Deploy    | Vercel (both frontend & backend)

---

## 🧪 API Endpoints

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/books`         | Get all books            |
| GET    | `/api/books/:id`     | Get one book             |
| POST   | `/api/books`         | Add new book             |
| PUT    | `/api/books/:id`     | Update a book            |
| DELETE | `/api/books/:id`     | Delete a book            |
| POST   | `/api/borrow`        | Borrow a book            |
| GET    | `/api/borrow`        | Aggregated borrow report |

---

## ⚙️ Frontend Setup

```bash
npm install
npm run dev
```

Create `.env` file:
```
VITE_API_BASE_URL=https://library-management-api-vert.vercel.app/api
```

---

## ⚙️ Backend Setup

```bash
npm install
npm run build
npm start
```

Create `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_uri
```

---

## 🧪 Postman

- Postman collection provided
- Contains all major endpoints

---

## 🙋 Author

**👤 Nur Nafish Ahmed Nobel**  
📧 Email: [nafish.nobel.me@gmail.com](mailto:nafish.nobel.me@gmail.com)  
🔗 GitHub: [@Nafish-Nobel](https://github.com/Nafish-Nobel)  
🏫 Daffodil International University

---

## 📄 License

This project is for educational/demo purposes only.
