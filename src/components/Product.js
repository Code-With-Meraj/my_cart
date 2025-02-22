import React from "react";

export default function Product({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <div className="product-card">
      <h2>
        {product.name}{" "}
        <span className="badge price-badge">₹{product.price}</span>
      </h2>
      <div className="quantity-controls">
        <button
          className="btn btn-sm btn-danger"
          onClick={onDecrement}
          disabled={product.quantity === 0}
        >
          -
        </button>
        <span className="quantity-text">{product.quantity}</span>
        <button className="btn btn-sm btn-success" onClick={onIncrement}>
          +
        </button>
      </div>
      <strong className="total-price">
        ₹{product.quantity * product.price}
      </strong>
      <button className="btn btn-sm btn-danger remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}
