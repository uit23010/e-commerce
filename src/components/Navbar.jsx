import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemCount }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#333", color: "white" }}>
      <h2>My E-Commerce</h2>
      <div>
        <Link to="/products" style={{ color: "white", marginRight: "20px" }}>Products</Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({cartItemCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;