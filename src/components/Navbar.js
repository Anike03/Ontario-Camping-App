import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Correct import

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/plan">Plan</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;