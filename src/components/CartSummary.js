import React from "react";

export default function CartSummary({ subtotal, tax, discount, totalAmount, setDiscount }) {
  const discountAmount = (subtotal * discount) / 100;
  const amountAfterDiscount = subtotal - discountAmount;

  return (
    <div className="card p-3 mt-3">
      <h4>Cart Summary</h4>
      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>

      <p>
        Discount (%):{" "}
        <input
          type="number"
          value={discount}
          onChange={(e) => {
            const value = parseFloat(e.target.value) || 0;
            setDiscount(value >= 0 ? value : 0);
          }}
          min="0"
          max="100"
        />
      </p>

      <p>Discount Amount: ₹{discountAmount.toFixed(2)}</p>
      <p>Amount After Discount: ₹{amountAfterDiscount.toFixed(2)}</p>
      <p>Tax (18% on discounted amount): +₹{tax.toFixed(2)}</p>
      <p>
        <strong>Total Payable: ₹{totalAmount.toFixed(2)}</strong>
      </p>
    </div>
  );
}
