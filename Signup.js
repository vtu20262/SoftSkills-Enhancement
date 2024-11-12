import React, { useState } from 'react';
import '../styles/Signup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Candidate');
  const [error, setError] = useState(null); // To handle errors

  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error before the new request

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      role,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users/signup', userData);
      console.log('Signup successful:', response.data);
      alert('Signup successful!'); // Optionally alert the user
      navigate('/Login'); // Redirect to login after signup
    } catch (error) {
      console.error('Signup error details:', error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); // Set error message from server response
      } else {
        setError('An error occurred during sign up.');
      }
    }
  };

  return (
    <div className="signup-page">
      <div className="content-container">
        <div className="signup-container">
          <h2>Sign Up</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message */}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Candidate">Candidate</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Interviewer">Interviewer</option>
                <option value="Admin">Admin</option>
                <option value="HR Manager">HR Manager</option>
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
