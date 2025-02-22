import React from "react";
import Product from "./Product";

export default function ProductList({
  productList,
  onQuantityChange,
  onRemove,
}) {
  return (
    <>
      {productList.map((product, index) => (
        <Product
          key={index}
          product={product}
          onIncrement={() => onQuantityChange(index, 1)}
          onDecrement={() => onQuantityChange(index, -1)}
          onRemove={() => onRemove(index)}
        />
      ))}
    </>
  );
}
