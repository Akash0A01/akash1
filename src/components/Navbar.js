import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="nav-item">Home</Link>
        <Link to={"/register"} className="nav-item">Register</Link>
        <Link to={"/login"} className="nav-item">Login</Link>
        <Link to={"/add-score"} className="nav-item">Add Score</Link>
        <Link to={"/get-rank"} className="nav-item">Get Rank</Link>
        <Link to={"/leaderboard"} className="nav-item">Leaderboard</Link>
      </div>

    
    </nav>
  );
}

export default Navbar;
