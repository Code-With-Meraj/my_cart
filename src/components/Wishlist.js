import React, { useState } from "react";

export default function Wishlist({ addToCart }) {
  const [wishlist, setWishlist] = useState([]);

  const removeFromWishlist = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <div className="card p-3 mt-3">
      <h4>Wishlist</h4>
      {wishlist.length === 0 ? (
        <p>No items in Wishlist.</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index} className="d-flex justify-content-between">
            <span>{item.name} - ₹{item.price}</span>
            <button className="btn btn-sm btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromWishlist(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
