import React, { useState,useEffect  } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const [productList, setProductList] = useState([
    {
      price: 9999,
      name: "Iphone 15 Pro",
      quantity: 0,
    },
    {
      price: 8999,
      name: "Redmi Note 9A",
      quantity: 0,
    },
    {
      price: 12999,
      name: "Google Pixel 8",
      quantity: 0,
    },
  ]);

  const totalAmount = productList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleReset = () => {
    const updatedProducts = productList.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProductList(updatedProducts);
  };

  const handleQuantityChange = (index, delta) => {
    const updatedProducts = productList.map((product, i) =>
      i === index
        ? { ...product, quantity: Math.max(0, product.quantity + delta) }
        : product
    );
    setProductList(updatedProducts);
  };

  const handleRemove = (index) => {
    const updatedProducts = productList.filter((_, i) => i !== index);
    setProductList(updatedProducts);
  };

  const handlePayNow = () => {
    alert(`You have successfully paid ₹${totalAmount}`);
    handleReset();
  };
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);
  
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("productList"));
    if (savedProducts) setProductList(savedProducts);
  }, []);
  

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem
          onAddProduct={(newProduct) =>
            setProductList([...productList, newProduct])
          }
        />
        <ProductList
          productList={productList}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      </main>
      <Footer
        totalAmount={totalAmount}
        onReset={handleReset}
        onPayNow={handlePayNow}
      />
    </>
  );
}

export default App;
