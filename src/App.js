import React, { useState, useEffect } from "react";
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
    { price: 99999, name: "iPhone 15 Pro", quantity: 0 },
    { price: 10000, name: "Redmi Note 9A", quantity: 0 },
    { price: 12999, name: "Google Pixel 8", quantity: 0 },
    { price: 18999, name: "Realme Pro 8", quantity: 0 },
  ]);

  const [wishlist, setWishlist] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [toastMessage, setToastMessage] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const subtotal = productList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;
  const discountedTotal = subtotal - discountAmount;
  const tax = discountedTotal * 0.18;
  const totalAmount = discountedTotal + tax;

  const handleReset = () => {
  
    setProductList((prev) =>
      prev.map((product) => ({ ...product, quantity: 0 }))
    );
  
    localStorage.removeItem("orders");
  
    setTimeout(() => {
    }, 100);
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

  const handleAddToWishlist = (product) => {
    if (!wishlist.some((item) => item.name === product.name)) {
      setWishlist([...wishlist, product]);
      setToastMessage(`${product.name} added to Wishlist`);
    }
  };

  const handleRemoveFromWishlist = (productName) => {
    setWishlist(wishlist.filter((item) => item.name !== productName));
  };

  const handleMoveToCart = (product) => {
    setProductList(
      productList.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
    handleRemoveFromWishlist(product.name);
    setToastMessage(`${product.name} moved to Cart`);
  };

  const handlePayNow = () => {
    if (totalAmount === 0) {
      setToastMessage("Cart is empty! Add items before paying.");
      return;
    }

    const newOrder = {
      totalAmount: totalAmount.toFixed(2),
      date: new Date().toLocaleString(),
      items: productList.filter((product) => product.quantity > 0),
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert(`You have successfully paid ₹${totalAmount.toFixed(2)}`);
    handleReset();
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <Router>
      <Navbar />
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>

      <main className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="grid-container">
                {/* Left Section: Product Management */}
                <div className="product-section">
                  <h2>Add New Product</h2>
                  <AddItem onAddProduct={handleAddProduct} />

                  <h2>Product List</h2>
                  <ProductList
                    productList={productList}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemove}
                    onAddToWishlist={handleAddToWishlist}
                  />
                </div>

                {/* Right Section: Wishlist and Cart */}
                <div className="cart-section">
                  <h2>Wishlist</h2>
                  <Wishlist
                    wishlist={wishlist}
                    onMoveToCart={handleMoveToCart}
                    onRemoveFromWishlist={handleRemoveFromWishlist}
                  />

                  <h2>Cart Summary</h2>
                  <CartSummary
                    subtotal={subtotal}
                    tax={tax}
                    discount={discount}
                    totalAmount={totalAmount}
                    setDiscount={setDiscount}
                  />

                  <ApplyCoupon setDiscount={setDiscount} />
                  <OrderHistory orders={orders} />
                </div>
              </div>
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
