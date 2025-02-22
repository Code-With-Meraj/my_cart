import React, { useState, useEffect } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="card p-3 mt-3">
      <h4>Order History</h4>
      {orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border-bottom pb-2 mb-2">
            <p>
              <strong>Order #{index + 1}</strong>
            </p>
            <p>Total Amount: ₹{order.totalAmount}</p>
          </div>
        ))
      )}
    </div>
  );
}
