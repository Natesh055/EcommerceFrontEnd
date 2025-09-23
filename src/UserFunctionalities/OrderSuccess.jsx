import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OrderSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  // The product info can be passed via navigate state from the purchase page
  const { product } = location.state || {};

  const handleGoBack = () => {
    navigate("/products"); // Navigate back to product list or dashboard
  };

  if (!product) {
    // If someone opens this page directly without product info
    return (
      <div style={{ padding: "2rem" }}>
        <h2>No order information available</h2>
        <button onClick={handleGoBack}>Go to Products</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Order Placed Successfully!</h2>
      <div style={{ margin: "2rem 0" }}>
        {product.imageUrl && <img src={product.imageUrl} alt={product.productName} width={200} />}
        <h3>{product.productName}</h3>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Quantity Ordered:</strong> 1</p>
      </div>
      <button onClick={handleGoBack} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
        Back to Products
      </button>
    </div>
  );
}

export default OrderSuccess;
