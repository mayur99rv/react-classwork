import React, { useState } from "react";

import "./Login.css";

function Twelve() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateInput = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setError("");
      alert("Login Successful");
      return true;
    }
    setError("Invalid username or password");
    return false;
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login form</h1>
      </div>
      <div className="container1">
        <div>
          <form onSubmit={(e) => validateInput(e)}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"> Submit </button>
          </form>
        </div>
      </div>
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Twelve;
