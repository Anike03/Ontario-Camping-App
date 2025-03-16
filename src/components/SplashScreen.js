import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css"; // Correct import
const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">
      <div className="scrollable-images">
        {/* Add your images here */}
        <img src="/images/splash1.jpg" alt="Camping 1" />
        <img src="/images/splash2.jpg" alt="Camping 2" />
      </div>
      <button onClick={() => navigate("/login")}>Get Started</button>
      <div className="version">Version 1.0</div>
    </div>
  );
};

export default SplashScreen;