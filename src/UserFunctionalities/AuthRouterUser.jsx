// src/components/AuthRouter.jsx
import { useState } from "react";
import UserDashboard from "./UserDashboard";
import UserLogin from "./UserLogin";
import UserSignup from "../PublicFunctionalities/UserSignup";
import './css/AuthRouterUser.css'

function AuthRouterUser() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [view, setView] = useState("login"); // 'login' | 'signup' | 'dashboard'

  const handleLogin = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setView("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setToken("");
    setView("login");
  };

  return (
    <div className="app-container">
      {view === "signup" && (
        <UserSignup onSignupSuccess={(userData, authToken) => handleLogin(userData, authToken)} />
      )}

      {view === "login" && <UserLogin onLogin={handleLogin} />}

      {view === "dashboard" && (
        <UserDashboard user={user} token={token} onLogout={handleLogout} />
      )}

      {/* Navigation buttons */}
      <div style={{ marginTop: "1rem" }}>
        {view !== "signup" && view !== "dashboard" && (
          <button onClick={() => setView("signup")}>Go to Signup</button>
        )}
        {view !== "login" && view !== "dashboard" && (
          <button onClick={() => setView("login")}>Go to Login</button>
        )}
      </div>
    </div>
  );
}

export default AuthRouterUser;
