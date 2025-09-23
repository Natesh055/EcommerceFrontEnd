import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AuthRouterUser from "./UserFunctionalities/AuthRouterUser";
// import AuthRouterAdmin from "./AdminFunctionalities/AuthRouterAdmin";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Select Role to Enter</h2>
      <button onClick={() => navigate("/user")} style={{ marginRight: "1rem" }}>
        Enter as User
      </button>
      <button onClick={() => navigate("/admin")}>
        Enter as Admin
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/user" element={<AuthRouterUser />} />
        {/* <Route path="/admin" element={<AuthRouterAdmin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
