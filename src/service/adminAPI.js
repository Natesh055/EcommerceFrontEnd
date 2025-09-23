import axios from "axios";

const BASE_URL = "http://localhost:8080/admin";

/**
 * Admin login
 * Sends email and password to backend for verification.
 * Backend should implement POST /admin/login endpoint.
 */
export const adminLogin = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { email, password });
    const admin = response.data;
    return { success: true, admin };
  } catch (error) {
    return {
      success: false,
      message:
        error.response?.data ||
        error.message ||
        "Invalid credentials",
    };
  }
};

/**
 * Fetch all users
 * @param {string} token - optional JWT token if backend requires authorization
 */
export const fetchAllUsers = async (token) => {
  try {
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};
    const response = await axios.get(`${BASE_URL}/all-users`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

/**
 * Fetch all items
 * @param {string} token - optional JWT token if backend requires authorization
 */
export const fetchAllItems = async (token) => {
  try {
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : {};
    const response = await axios.get(`${BASE_URL}/all-items`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};
