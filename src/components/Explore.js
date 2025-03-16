import React from "react";
import Navbar from "./Navbar";
import "../styles/Explore.css"; // Correct import

const Explore = () => {
  return (
    <div className="explore-container">
      <Navbar />
      <h1>Explore Camping Sites</h1>
      <div className="camping-sites">
        {/* Add camping site cards here */}
        <div className="camping-site-card">
          <h3>Algonquin Park</h3>
          <p>5.5 km away</p>
          <button>Book Now</button>
        </div>
        <div className="camping-site-card">
          <h3>Niagara Park</h3>
          <p>10.8 km away</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;