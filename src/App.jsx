import { useState } from "react";
import UserLogin from "./UserFunctionalities/UserLogin";
import UserSignup from "./PublicFunctionalities/UserSignup";
import UserDashboard from "./UserFunctionalities/UserDashboard";

function App() {
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
        <UserSignup 
          onSignupSuccess={(userData, authToken) => handleLogin(userData, authToken)} 
        />
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

export default App;
