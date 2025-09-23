import React, { useEffect, useState } from "react";
import { getUserDetails, getAllItems } from "../service/api";
import { useNavigate } from "react-router-dom";
import "./css/dashboard.css";

function UserDashboard({ token, user, onLogout }) {
  const [email, setEmail] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Fetch logged-in user info
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (user) {
          setEmail(user.email || user.userName || "Unknown");
        } else if (token) {
          const userData = await getUserDetails(token);
          setEmail(userData.email || userData.userName || "Unknown");
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, [token, user]);

  // Fetch all available items
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getAllItems();
        setAllItems(items);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // Navigate to product purchase page
  const handleBuyClick = (item) => {
    // Pass the whole item object as state
    navigate(`/buy/${item.productName}`, { state: { product: item } });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>User Dashboard</h2>
        <p><strong>Email:</strong> {email}</p>
        <button onClick={onLogout} style={{ marginTop: "1rem" }}>
          Logout
        </button>
      </div>

      <h3>Available Items</h3>
      {loading ? (
        <p>Loading items...</p>
      ) : allItems.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <div className="cards-container">
          {allItems.map((item) => (
            <div key={item.orderId?.toString() || item.productName} className="card">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.productName}
                  style={{ width: "150px", marginBottom: "0.5rem" }}
                />
              )}
              <h4>{item.productName}</h4>
              <p><strong>Price:</strong> ${item.price}</p>
              <p><strong>Remaining Quantity:</strong> {item.existingQuantity}</p>
              <button
                disabled={item.existingQuantity === 0}
                onClick={() => handleBuyClick(item)}
              >
                {item.existingQuantity === 0 ? "Out of Stock" : "Buy"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
