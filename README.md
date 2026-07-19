
# 🛒 E-Commerce Store

> A full-stack e-commerce web application built with React, Node.js, Express, MongoDB, and Redis. The application features secure authentication, an admin dashboard, product management, search functionality, and a responsive user interface.


## 🌐 Live Demo

* **Frontend:**  https://ecommerce-gilt-six-55.vercel.app
* **Backend API:**  https://ecommerce-production-4b19.up.railway.app


## 📸 Screenshots

<img width="439" height="434" alt="image" src="https://github.com/user-attachments/assets/9aadaf04-c9e6-4bd4-9019-62fd55282ec4" />

<img width="879" height="434" alt="image" src="https://github.com/user-attachments/assets/315881bf-4325-4273-b283-69fbe0357ce4" />

<img width="560" height="419" alt="image" src="https://github.com/user-attachments/assets/fed91664-ac26-4628-a106-03c4cc381367" />

<img width="521" height="431" alt="image" src="https://github.com/user-attachments/assets/dfc7b773-d451-47fa-bdd7-7b79008ed313" />


* Home page
* Product page
* Search results
* Cart
* Login/Register
* Admin dashboard

---

## ✨ Features

### Customer

* User registration and login
* JWT authentication with HTTP-only cookies
* Product browsing
* Search products
* Browse by category
* Shopping cart
* Responsive design
* Dark/Light mode

### Admin

* Add products
* Edit products
* Delete products
* Dashboard with product management

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Zustand
* Material UI
* Framer Motion
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Redis
* JWT
* Cloudinary 

---

## 📂 Project Structure

```text
ecommerce/
├── ecommerceFrontend/
└── ecommerceBackend/
```

---

## ⚙️ Environment Variables

### Backend

```env
PORT=
MONGO_URI=
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
UPSTASH_REDIS_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLIENT_URL=
```

### Frontend

```env
VITE_BASE_URL=
```

---

## 🚀 Running Locally

### Clone

```bash
git clone https://github.com/deathstroke-Assassin/ecommerce.git
```

### Backend

```bash
cd Backend
npm install
npm run devmon
```

### Frontend

```bash
cd ecommerceFrontend
npm install
npm run dev
```

---

## 📌 Future Improvements

* Wishlist
* Product sorting
* Checkout
* Order history
* Payment integration
* Product reviews
* Pagination

---

## 📖 What I Learned

> During this project I learned how to:
>
> * Build a RESTful API using Express.js.
> * Manage application state with Zustand.
> * Implement JWT authentication with refresh tokens.
> * Store tokens securely using HTTP-only cookies.
> * Connect MongoDB using Mongoose.
> * Cache data using Redis.
> * Deploy a full-stack application using Railway and Vercel.
> * Handle CORS, environment variables, and production deployment issues.


