import React, { useEffect, useState } from "react";
import { getUserDetails } from "../service/api";

function UserDashboard({ token }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUserDetails(token);
        console.log("Fetched user in dashboard:", user);
        setEmail(user.email || user.userName || "Unknown");
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      {email ? (
        <p><strong>Email:</strong> {email}</p>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}

export default UserDashboard;
