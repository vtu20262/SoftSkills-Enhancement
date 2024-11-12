import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated here
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Updated here

  const handleResetPassword = () => {
    // Display a success message (no logic, just a popup)
    alert('Reset link sent successfully!');
    setEmail('');  // Clear the email field
  };

  // Navigate back to login page
  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-heading">Forgot Password</h2>
      <div className="forgot-password-form">
        <div className="form-group">
          <label htmlFor="email">Enter your email address</label>
          <input
            type="email"
            id="email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <button
          className="submit-button"
          onClick={handleResetPassword}
        >
          Send Password Reset Email
        </button>
        <button
          className="back-to-login-button"
          onClick={handleBackToLogin}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
