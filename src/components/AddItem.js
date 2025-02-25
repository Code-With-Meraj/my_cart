import React, { useState } from "react";

export default function AddItem({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || isNaN(price) || price <= 0) {
      alert("Please enter valid item details.");
      return;
    }

    onAddProduct({ name, price: parseFloat(price), quantity: 0 });

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row align-items-center">
        <div className="col-4 mb-4">
          <label htmlFor="itemName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-4 mb-4">
          <label htmlFor="itemPrice" className="form-label">
            Price (₹)
          </label>
          <input
            type="number"
            className="form-control"
            id="itemPrice" 
            placeholder="Enter item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col-4 mb -2 ">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
