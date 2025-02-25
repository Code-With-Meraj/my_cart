import React, { useState, useEffect } from "react";

export default function Auth() {
  const [user, setUser] = useState(() => localStorage.getItem("user"));

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

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
          Logout ({user})
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}
