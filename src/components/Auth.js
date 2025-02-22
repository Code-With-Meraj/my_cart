import React, { useState } from "react";

export default function Auth() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleLogin = () => {
    localStorage.setItem("user", "Guest");
    setUser("Guest");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}
