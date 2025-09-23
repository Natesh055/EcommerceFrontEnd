import axios from "axios";

const BASE_URL = "http://localhost:8080";

// ================= USER API =================

// ✅ Get user details
export const getUserDetails = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/get-details`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

// ✅ Get all orders of a user
export const getUserOrders = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/user/email/get-orders`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
};

// ✅ Get all available items/orders
export const getAllItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/all-items`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all items:", error);
    throw error;
  }
};

// ✅ Update user details
export const updateUser = async (token, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/user/update-user`, userData, {
      headers: {
        Authorization: `Basic ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// ✅ Add an order to user
export const addOrderToUser = async (token, productName) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/add-order/${productName}`,
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding order to user:", error);
    throw error;
  }
};
