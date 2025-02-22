import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import CartSummary from "./components/CartSummary";
import ApplyCoupon from "./components/ApplyCoupon";
import Wishlist from "./components/Wishlist";
import ThemeToggle from "./components/ThemeToggle";
import ToastNotifications from "./components/ToastNotifications";
import OrderHistory from "./components/OrderHistory";
import About from "./components/About";

function App() {
  const [productList, setProductList] = useState([
    { price: 99999, name: "Iphone 15 Pro", quantity: 0 },
    { price: 8999, name: "Redmi Note 9A", quantity: 0 },
    { price: 12999, name: "Google Pixel 8", quantity: 0 },
    { price: 18999, name: "Realme pro  8 ", quantity: 0 },
  ]);

  const [wishlist, setWishlist] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState("");

  const subtotal = productList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const discountedTotal = subtotal - (subtotal * discount) / 100;
  const totalAmount = discountedTotal + tax;

  const handleReset = () => {
    setProductList(productList.map((product) => ({ ...product, quantity: 0 })));
  };

  const handleQuantityChange = (index, delta) => {
    setProductList(
      productList.map((product, i) =>
        i === index
          ? { ...product, quantity: Math.max(0, product.quantity + delta) }
          : product
      )
    );
  };

  const handleRemove = (index) => {
    setProductList(productList.filter((_, i) => i !== index));
  };

  const handleAddProduct = (newProduct) => {
    setProductList([...productList, newProduct]);
  };

  const handlePayNow = () => {
    if (totalAmount === 0) {
      setToastMessage("Cart is empty! Add items before paying.");
      return;
    }
    alert(`You have successfully paid ₹${totalAmount.toFixed(2)}`);
    handleReset(); 
  };

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
    setToastMessage(`${product.name} added to Wishlist`);
  };

  const handleRemoveFromWishlist = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <div className="d-flex justify-content-end m-3">
        <ThemeToggle />
      </div>

      <main className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddItem onAddProduct={handleAddProduct} />
                <ProductList
                  productList={productList}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
                <Wishlist
                  wishlist={wishlist}
                  addToCart={handleAddToWishlist}
                  removeFromWishlist={handleRemoveFromWishlist}
                />
                <CartSummary
                  productList={productList}
                  totalAmount={totalAmount}
                />
                <ApplyCoupon setDiscount={setDiscount} />
                <OrderHistory />
              </>
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer
        totalAmount={totalAmount}
        onReset={handleReset}
        onPayNow={handlePayNow}
      />

      {toastMessage && <ToastNotifications message={toastMessage} />}
    </Router>
  );
}

export default App;
