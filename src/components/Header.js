import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="navbar-brand">MyWebsite</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/navbar">Navbar</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/my-component">My Component</Link>
        <Link to="/header">Header</Link>
        <Link to="/footer">Footer</Link>
      </nav>
    </header>
  );
}

export default Header;
