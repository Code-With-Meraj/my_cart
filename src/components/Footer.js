import React from "react";

export default function Footer({ totalAmount, onReset, onPayNow, darkMode }) {
  return (
    <div
      className="footer"
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "10px",
      }}
    >
      <button className="btn btn-danger" onClick={onReset}>
        Reset
      </button>
      <h4 style={{ color: darkMode ? "lightgreen" : "darkblue" }}>
        Total Amount: ₹{totalAmount.toFixed(2)}
      </h4>
      <button className="btn btn-primary" onClick={onPayNow}>
        Pay Now
      </button>
    </div>
  );
}
