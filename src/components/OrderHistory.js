import React from "react";

export default function OrderHistory({ orders }) {
  console.log("OrderHistory received orders:", orders); 

  if (!orders || orders.length === 0) {
    return <p>No past orders.</p>; 
  }

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <p>
            <strong>Order Date:</strong> {order.date}
          </p>
          <p>
            <strong>Total Amount:</strong> ₹{order.totalAmount}
          </p>
          <h4>Items:</h4>
          <ul>
            {order.items.map((item, i) => (
              <li key={i}>
                {item.name} (x{item.quantity}) - ₹{item.price * item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
