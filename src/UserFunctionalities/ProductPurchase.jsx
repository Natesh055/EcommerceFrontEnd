import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderToUser } from "../service/api";

function ProductPurchase({ token }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state; // passed from navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addOrderToUser(token, product.productName);
      // Navigate to success page with product details
      navigate("/order-success", { state: { product } });
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Buy Product</h2>
      <div>
        {product.imageUrl && (
          <img src={product.imageUrl} alt={product.productName} width={200} />
        )}
        <h3>{product.productName}</h3>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Available:</strong> {product.existingQuantity}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" disabled={product.existingQuantity === 0}>
          {product.existingQuantity === 0
            ? "Out of Stock"
            : "Confirm Purchase"}
        </button>
      </form>
    </div>
  );
}

export default ProductPurchase;
