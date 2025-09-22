import React, { useState } from "react";
import axios from "axios";

function UserLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Encode credentials as base64 for Basic Auth
      const token = btoa(`${email}:${password}`);

      // Call your secured API
      const response = await axios.get("http://localhost:8080/user/get-details", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      // Pass user data to parent component
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
    <div style={styles.container}>
      <h2>User Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: { padding: "10px", background: "#007bff", color: "white", border: "none", cursor: "pointer" },
  error: { color: "red", marginTop: "10px" },
};

export default UserLogin;
