// src/components/Login.js
import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
// Import Navbar


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Candidate');
  const navigate = useNavigate(); // Default role

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log({ username, password, role });
    navigate('/Dashboard');
  };
    
  return (
    <div className="login-page">
      <div className="login-content">
        
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username or Email</label>
              <input
                type="text"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <div className="role">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Candidate">Candidate</option>
                <option value="Recruiter">Recruiter</option>
                <option value="Interviewer">Interviewer</option>
                <option value="Admin">Admin</option>
                <option value="HR Manager">HR Manager</option>
              </select>
            </div>
            <div className="remember-me">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <button type="submit">Login</button>
          </form>
          <Link to="/forgot-password">Forgot Password?</Link>

          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};
export default Login;
