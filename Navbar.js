// src/components/Navbar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import AI from '../assets/AI.jpg';

const NavbarComponent = ({ toggleSidebar, isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <img src={AI} alt="Website Logo" />
        </div>
        <div className="heading">

          <h1>Soft Skill Enhancement AI</h1>
        </div>
      </div>
      <div className="nav-buttons">
        {location.pathname === '/' ? (
          <>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/signup')}>Sign Up</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </div>
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && (
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isOpen ? '☰' : '☰'}
        </button>
      )}
    </nav>
  );
};

export default NavbarComponent;
