import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/public/create-user",
      userData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
