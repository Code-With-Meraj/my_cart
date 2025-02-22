import React from "react";

export default function Footer({ totalAmount, onReset, onPayNow }) {
  return (
    <div className="footer">
      <button className="btn btn-danger" onClick={onReset}>
        Reset
      </button>
      <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
      <button className="btn btn-primary" onClick={onPayNow}>
        Pay Now
      </button>
    </div>
  );
}
