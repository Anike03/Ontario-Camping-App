import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css"; // Correct import

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="search-bar">
        <input type="text" placeholder="Search by location, activity etc" />
      </div>
      <div className="for-you">
        <h2>For You</h2>
        {/* Add scrollable camping sites here */}
      </div>
    </div>
  );
};

export default Home;