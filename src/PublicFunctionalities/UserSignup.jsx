import React, { useState } from "react";
import { createUser } from "../service/publicAPI";
import './login.css';

function UserSignup({ onSignupSuccess }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser({
        userName,
        email,
        password,
      });

      // Assuming your backend just returns a success message,
      // we need to create a token for frontend login simulation
      const token = btoa(`${email}:${password}`);

      // Create a user object from signup info
      const user = {
        userName,
        email,
      };

      setMessage("Signup successful!");

      // Call App's handler to go to dashboard
      if (onSignupSuccess) {
        onSignupSuccess(user, token);
      }

    } catch (err) {
      console.error("Signup failed:", err);
      if (err.response && err.response.status === 409) {
        setMessage("User already exists with this email.");
      } else {
        setMessage("Failed to create user. Please try again.");
      }
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">User Signup</h1>
      <form onSubmit={handleSignup} className="form">
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="input"
        />
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
        <button type="submit" className="button">Signup</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default UserSignup;
