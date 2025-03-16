import React from "react";
import Navbar from "./Navbar";
import "./styles/Plan.css";

const Plan = () => {
  return (
    <div className="plan-container">
      <Navbar />
      <h1>Plan Your Trip</h1>
      <div className="trip-planner">
        <input type="text" placeholder="Search for a location" />
        <button>Search</button>
      </div>
      <div className="trip-details">
        <h2>Your Trips</h2>
        <div className="trip-card">
          <h3>Algonquin Park</h3>
          <p>Date: 2023-10-15</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;