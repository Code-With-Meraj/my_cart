// import React, { useState } from "react";

// export default function ToastNotifications() {
//   const [message, setMessage] = useState(null);

//   const showToast = (msg) => {
//     setMessage(msg);
//     setTimeout(() => setMessage(null), 3000);
//   };

//   return (
//     <div className={`toast ${message ? "show" : ""}`} style={{ position: "fixed", bottom: 20, right: 20 }}>
//       {message && <div className="toast-body">{message}</div>}
//     </div>
//   );
// }
