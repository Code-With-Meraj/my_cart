import React, { useState } from "react";

export default function ApplyCoupon({ setDiscount, generatedCoupons }) {
  const [coupon, setCoupon] = useState(0);

  const applyCoupon = () => {
    if (generatedCoupons[coupon]) {
      setDiscount(generatedCoupons[coupon]);
      alert(`Coupon Applied! ${generatedCoupons[coupon]}% Discount.`);
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
