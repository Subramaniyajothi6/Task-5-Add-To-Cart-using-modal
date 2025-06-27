# 🛒 Add to Cart Using Modal

A responsive React application that allows users to browse products and add them to a shopping cart using a modal popup. This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

## 🚀 Live Demo

👉 [View Live App](https://add-to-cart-using-model.netlify.app/)

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
- [Known Issues / To-Do](#-known-issues--to-do)
- [Contributing](#-contributing)
- [Author](#-author)

## 📸 Screenshots

### 🏠 Product Listing Page
![Product Page](https://github.com/Subramaniyajothi6/Task-5-Add-To-Cart-using-modal/blob/main/main.page.png?raw=true)

### 🛍️ Cart Modal Page
![Cart Modal](https://github.com/Subramaniyajothi6/Task-5-Add-To-Cart-using-modal/blob/main/cart.page.png?raw=true)

## 📦 Features

- ✅ Fetches products from the Fake Store API
- ✅ Displays product image, title, description, and price
- ✅ "Add to Cart" button for each product
- ✅ Alert shown if the product is already in the cart
- ✅ Cart item count displayed in the header
- ✅ Modal opens on clicking the cart button
- ✅ Products listed inside the modal with the option to remove them
- ✅ Click outside the modal to close
- ✅ Responsive design (works on desktop and mobile)
- ✅ Neat UI with basic Tailwind CSS

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS
- SweetAlert2 (for alerts)
- Fake Store API

## 🗂️ Folder Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   └── ProductCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── README.md
└── package.json
```

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Subramaniyajothi6/Task-5-Add-To-Cart-using-modal.git
cd Task-5-Add-To-Cart-using-modal
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

## ⚠️ Known Issues / To-Do

- Cart items are not persisted on refresh (no local storage yet)
- No quantity management (add multiple of same product)

### To-Do

- [ ] Add quantity control to cart
- [ ] Persist cart using localStorage
- [ ] Add user authentication (optional)

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or submit a pull request.

## 🧑‍💻 Author

**Subramaniyajothi**  
[GitHub](https://github.com/Subramaniyajothi6)
