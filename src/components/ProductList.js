import React from "react";

export default function ProductList({
  productList,
  onQuantityChange,
  onRemove,
  onAddToWishlist,
}) {
  console.log("ProductList Rendered! Product List:", productList);

  return (
    <div className="card p-3 mt-3 mb-3">
      <h4>Products</h4>
      {productList.length === 0 ? (
        <p className="text-muted">No products available.</p>
      ) : (
        productList.map((product, index) => (
          <div
            key={product.name}
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2"
          >
            <span>
              {product.name} - ₹{product.price} (Qty: {product.quantity})
            </span>
            <div>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => onQuantityChange(index, 1)}
              >
                +
              </button>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onQuantityChange(index, -1)}
              >
                -
              </button>
              <button
                className="btn btn-sm btn-danger me-2"
                onClick={() => {
                  console.log(`Removing Product:`, product);
                  onRemove(index);
                }}
              >
                Remove
              </button>
              <button
                className="btn btn-sm btn-info"
                onClick={() => {
                  console.log(`Adding to Wishlist:`, product);
                  onAddToWishlist(product);
                }}
              >
                ❤️ Wishlist
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
