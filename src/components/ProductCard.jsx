import React from "react";

const ProductCard = ({ product, addToCart }) => {
  if (!product) return null; // ✅ Prevents undefined errors

  return (
    <div className="product-card">
      <img src={product.image} alt={`Image of ${product.name}`} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-reviews">⭐ {product.rating} Rating</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button> {/* ✅ Ensure function call */}
    </div>
  );
};

export default ProductCard;
