import React from "react";

export default function Product({
  product,
  onIncrement,
  onDecrement,
  onRemove,
}) {
  return (
    <div className="row align-items-center row mt-3">
      <div className="col-5">
        <h2>
          {product.name}
          <span className="badge text-bg-secondary">₹{product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Quantity controls">
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDecrement}
            disabled={product.quantity === 0}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            Quantity: {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2 text-end">
        <strong>₹{product.quantity * product.price}</strong>
      </div>
      <button className="col-2 btn btn-danger" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}
