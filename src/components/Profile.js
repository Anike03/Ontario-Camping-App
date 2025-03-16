import React, { useState, useEffect } from "react";
import { auth } from "../firebase/firebase"; // Correct import path
import { updateProfile, updateEmail, updatePassword } from "firebase/auth"; // Import auth functions
import ResendVerification from "./ResendVerification"; // Import the ResendVerification component
import "../styles/Profile.css"; // Correct import

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load current user data when the component mounts
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, []);

  // Update user profile (display name)
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        await updateProfile(user, { displayName });
        setSuccess("Profile updated successfully!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Update user email
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        await updateEmail(user, email);
        setSuccess("Email updated successfully!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Update user password
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        setSuccess("Password updated successfully!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>

      {/* Display error or success messages */}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      {/* Update Display Name */}
      <form onSubmit={handleUpdateProfile}>
        <h2>Update Display Name</h2>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <button type="submit">Update Name</button>
      </form>

      {/* Update Email */}
      <form onSubmit={handleUpdateEmail}>
        <h2>Update Email</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Email</button>
      </form>

      {/* Update Password */}
      <form onSubmit={handleUpdatePassword}>
        <h2>Update Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Update Password</button>
      </form>

      {/* Resend Verification Email */}
      <ResendVerification />
    </div>
  );
};

export default Profile;