import React from "react";

export default function CartSummary({ totalAmount }) {
  const tax = totalAmount * 0.1;
  const grandTotal = totalAmount + tax;

  return (
    <div className="cart-summary">
      <h4>Cart Summary</h4>
      <p>
        <strong>Total Items:</strong> {totalAmount > 0 ? "Multiple" : "None"}
      </p>
      <p>
        <strong>Subtotal:</strong> ₹{totalAmount.toFixed(2)}
      </p>
      <p>
        <strong>Tax (10%):</strong> ₹{tax.toFixed(2)}
      </p>
      <h3>
        <strong>Grand Total:</strong> ₹{grandTotal.toFixed(2)}
      </h3>
      <input
        type="text"
        className="coupon-input"
        placeholder="Enter Coupon Code"
      />
      <button className="btn btn-success apply-coupon">Apply Coupon</button>
    </div>
  );
}
