import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const productData = [
  { name: "Smart Watch", image: "https://th.bing.com/th?id=OSK.6ef82e17991e99046ab2c5754db4ee27&w=207&h=117&o=6&pid=SANGAM" },
  { name: "Wireless Earbuds", image: "https://www.bing.com/th?id=OIP.NAIXuY9tcqKxHkl1YxA6LQHaJx&w=143&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
  { name: "Gaming Mouse", image: "https://th.bing.com/th?id=OIP.2l-bV8QDE62t6V87JlURsQHaHa&w=200&h=200&c=10&o=6&pid=3.1&rm=2" },
  { name: "Bluetooth Speaker", image: "https://www.bing.com/th?id=OIP.tr8XEWXGwCd8gV8vCcrbbwHaHa&w=189&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
  { name: "Portable Charger", image: "https://www.bing.com/th?id=OIP.BW_jcRFlP_PBhXGusgyZQwHaHa&w=173&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
  { name: "Mechanical Keyboard", image: "https://th.bing.com/th?id=OIP.PdeeJLVV7nhkK_HhgZ7qXQHaD3&w=157&h=104&c=7&bgcl=2d57c3&r=0&o=6&pid=13.1" },
  { name: "Noise-Canceling Headphones", image: "https://th.bing.com/th?id=OIP.bFv85oCmucZPxf-zI9Td2gHaE7&w=200&h=132&rs=1&qlt=80&o=6&pid=3.1" },
  { name: "Smartphone Stand", image: "https://www.bing.com/th?id=OIP.0Wnuj8Th6698Fq23cW-RiwHaHa&w=166&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" },
  { name: "Fitness Tracker", image: "https://th.bing.com/th/id/OIP.SxJxV635w3i-GpWY2SxheQHaHZ?w=191&h=190&c=7&r=0&o=5&pid=1.7" },
  { name: "USB-C Hub", image: "https://th.bing.com/th/id/OIP.TMRYPtfO_sx_OIa6D0LaygHaIL?w=159&h=180&c=7&r=0&o=5&pid=1.7" },
];

const additionalProducts = Array.from({ length: 40 }, (_, index) => ({
  id: index + 11,
  name: productData[index % 10].name,
  image: productData[index % 10].image,
  rating: (Math.random() * 5).toFixed(1),
})).sort((a, b) => b.rating - a.rating); // Sort by rating

const products = [...productData.map((p, i) => ({ id: i + 1, ...p, rating: (Math.random() * 5).toFixed(1) })), ...additionalProducts].slice(0, 50);

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(products);
  const [cart, setCart] = useState([]); // ✅ Added cart state

  // 🔹 Search & Update products
  useEffect(() => {
    setVisibleProducts(
      products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  // 🔹 Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {/* 🔹 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      {/* 🔹 Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} /> 
        ))}
      </div>
    </div>
  );
};

export default ProductList;
