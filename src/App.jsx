import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AuthRouterUser from "./UserFunctionalities/AuthRouterUser";
import AdminLogin from "./AdminFunctionalities/AdminLogin";
import AdminDashboard from "./AdminFunctionalities/AdminDashboard";
import ProductPurchase from "./UserFunctionalities/ProductPurchase";
import { useState } from "react";

// Role selection component
function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Select Role to Enter</h2>
      <button
        onClick={() => navigate("/user")}
        style={{ marginRight: "1rem", padding: "10px 20px" }}
      >
        Enter as User
      </button>
      <button
        onClick={() => navigate("/admin")}
        style={{ padding: "10px 20px" }}
      >
        Enter as Admin
      </button>
    </div>
  );
}

// Wrapper component for Admin route to handle login state
function AdminRouteWrapper() {
  const [admin, setAdmin] = useState(null);

  if (!admin) {
    return <AdminLogin onLogin={setAdmin} />;
  }

  return <AdminDashboard admin={admin} />;
}

// Main App component
function App() {
  return (
    <Router>
      <Routes>
        {/* Role selection */}
        <Route path="/" element={<RoleSelection />} />

        {/* User routes */}
        <Route path="/user/*" element={<AuthRouterUser />} />

        {/* Buy product page */}
        <Route path="/buy/:productName" element={<ProductPurchase />} />

        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminRouteWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
