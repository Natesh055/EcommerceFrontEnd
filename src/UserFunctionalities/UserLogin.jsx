import React, { useState } from "react";
import { getUserDetails } from "../service/api";
import './login.css';

function UserLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = btoa(`${email}:${password}`);
      const response = await getUserDetails(token);

      if (onLogin) {
        onLogin(response.data, token);
      }

      setError("");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">User Login</h1>
      <form onSubmit={handleLogin} className="form">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="input"
        />
        <button type="submit" className="button">Login</button>
        {error && <p className="message">{error}</p>}
      </form>
    </div>
  );
}

export default UserLogin;
