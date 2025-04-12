import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">Study Buddy</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/subjects" className="nav-link">Subjects</Link>
          <Link to="/chat" className="nav-link">Chat</Link>
          <Link to="/support" className="nav-link">Support</Link>
        </div>
      </div>

      <div className="nav-right">
        <Link to="/profile" className="nav-button">Profile</Link>
        <Link to="/signup" className="nav-button">Sign Up</Link>
        <Link to="/login" className="nav-button login-btn">Log In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
