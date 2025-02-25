import React from "react";

function Wishlist({ wishlist, onMoveToCart, onRemoveFromWishlist }) {
  return (
    <div className="card p-3 mt-3 mb-3">
      <h4>Wishlist</h4>
      {wishlist.length === 0 ? (
        <p className="text-muted">No items in Wishlist.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.name}
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2"
          >
            <span>
              {item.name} - ₹{item.price}
            </span>
            <div>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => onMoveToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onRemoveFromWishlist(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
