import React from "react";
import { auth } from "../firebase/firebase";
import { sendEmailVerification } from "firebase/auth";
import "../styles/ResendVerification.css"; // Correct import

const ResendVerification = () => {
  const handleResendVerification = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        await sendEmailVerification(user);
        alert("Verification email sent! Please check your inbox.");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("No user is logged in.");
    }
  };

  return (
    <div className="resend-verification">
      <p>Didn't receive the verification email?</p>
      <button onClick={handleResendVerification}>Resend Verification Email</button>
    </div>
  );
};

export default ResendVerification;