import React, { useState } from "react";

export default function ApplyCoupon({ setDiscount }) {
  const [coupon, setCoupon] = useState("");

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10); // 10% discount
      alert("Coupon Applied! 10% Discount.");
    } else {
      alert("Invalid Coupon Code.");
    }
  };

  return (
    <div className="mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Coupon Code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <button className="btn btn-success mt-2" onClick={applyCoupon}>
        Apply Coupon
      </button>
    </div>
  );
}
