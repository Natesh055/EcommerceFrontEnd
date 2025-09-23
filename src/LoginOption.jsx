import React, { useState } from "react";
import UserLogin from "./UserFunctionalities/UserLogin";
import UserSignup from "./PublicFunctionalities/UserSignup";

function LoginOption({ onLogin }) {
  const [view, setView] = useState("initial"); // 'initial', 'login', 'signup'

  const handleLoginSuccess = (userData, authToken) => {
    onLogin(userData, authToken);
  };

  if (view === "initial") {
    return (
      <div className="login-option-container">
        <h2>Welcome to Our Application</h2>
        <p>Please choose an option below:</p>
        <button onClick={() => setView("login")}>User Login</button>
        <button onClick={() => setView("signup")} style={{ marginLeft: "1rem" }}>
          User Signup
        </button>
      </div>
    );
  }

  if (view === "login") {
    return (
      <div className="login-option-container">
        <UserLogin onLogin={handleLoginSuccess} />
        <p>
          Not a user?{" "}
          <button
            onClick={() => setView("signup")}
            style={{ background: "none", border: "none", color: "blue", cursor: "pointer", padding: 0 }}
          >
            Signup
          </button>
        </p>
        <button onClick={() => setView("initial")} style={{ marginTop: "1rem" }}>
          Back
        </button>
      </div>
    );
  }

  if (view === "signup") {
    return (
      <div className="login-option-container">
        <UserSignup onSignupSuccess={handleLoginSuccess} />
        <p>
          Already a user?{" "}
          <button
            onClick={() => setView("login")}
            style={{ background: "none", border: "none", color: "blue", cursor: "pointer", padding: 0 }}
          >
            Login
          </button>
        </p>
        <button onClick={() => setView("initial")} style={{ marginTop: "1rem" }}>
          Back
        </button>
      </div>
    );
  }

  return null;
}

export default LoginOption;
