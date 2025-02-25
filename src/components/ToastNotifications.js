import React, { useState } from "react";

export default function ToastNotifications() {
  const [message] = useState(null);

  return (
    <div
      className={`toast ${message ? "show" : ""}`}
      style={{ position: "fixed", bottom: 20, right: 20 }}
    >
      {message && <div className="toast-body">{message}</div>}
    </div>
  );
}
