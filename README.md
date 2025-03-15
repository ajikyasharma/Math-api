# Math API

A simple Node.js API to perform mathematical operations like addition, factorial, and Fibonacci series using **Express.js** and **Prisma with MySQL**.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v18 or later) → [Download here](https://nodejs.org/)
- **MySQL** (running on localhost:3306)
- **Postman** (for API testing) → [Download here](https://www.postman.com/)

### 1️⃣ Clone the Repository
```sh
git clone <repository_url>
cd Nodejs_task
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
DATABASE_URL="mysql://root:password@localhost:3306/math-api"
PORT=3000
```
Replace `root` and `password` with your actual MySQL credentials.

### 4️⃣ Setup Database & Prisma
```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 5️⃣ Start the Server
```sh
npm run dev  # If using nodemon
# OR
node index.js
```

---

## 🛠 API Endpoints

### 1️⃣ Addition API
**Endpoint:**
```sh
POST /api/addition
```
**Request Body:**
```json
{
  "num1": 5,
  "num2": 10
}
```
**Response:**
```json
{
  "sum": 15
}
```

### 2️⃣ Factorial API
**Endpoint:**
```sh
GET /api/factorial/:number
```
**Example:** `GET /api/factorial/5`
**Response:**
```json
{
  "result": 120
}
```

### 3️⃣ Fibonacci API
**Endpoint:**
```sh
GET /api/fibonacci/:count
```
**Example:** `GET /api/fibonacci/6`
**Response:**
```json
{
  "result": [0,1,1,2,3,5]
}
```

---

## 📌 Project Structure
```
Nodejs_task/
│── controllers/
│   ├── mathControllers.js
│── routes/
│   ├── mathRoutes.js
│── prisma/
│   ├── schema.prisma
│── .env
│── index.js
│── package.json
│── README.md
```

---

## 🔥 Troubleshooting

### 1️⃣ **Prisma Error: `@prisma/client did not initialize yet`**
```sh
npx prisma generate
```

### 2️⃣ **MySQL Connection Issues**
- Ensure MySQL is running on `localhost:3306`
- Check `.env` file for correct credentials
- Run `npx prisma migrate dev`

### 3️⃣ **Server Not Starting?**
```sh
delete node_modules/
npm install
npm run dev
```

---

## 🎯 Author
- **Ajikya Sharma** 🚀

