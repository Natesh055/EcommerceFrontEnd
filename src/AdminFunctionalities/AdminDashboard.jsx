import React from "react";

function AdminDashboard({ admin }) {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Welcome, Admin!</h2>
      <p>
        <strong>Username:</strong> {admin.userName}
      </p>
    </div>
  );
}

export default AdminDashboard;
