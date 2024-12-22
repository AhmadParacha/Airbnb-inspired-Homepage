import React from 'react';
import '../footer.css'; // Import the corresponding CSS file

import { FaSearch, FaBars, FaUserCircle, FaGlobe } from 'react-icons/fa';

export default function PagetwoHeader() {
  return (
    <div className="header-container">
      {/* Logo Section */}
      <div className="header-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb Logo"
        />
      </div>

      {/* Search Bar Section */}
      <div className="header-search">
        <div className="search-option">Anywhere</div>
        <div className="divider" />
        <div className="search-option">Any week</div>
        <div className="divider" />
        <div className="search-option">Add guests</div>
        <div className="search-icon">
          <FaSearch />
        </div>
      </div>

      {/* Navigation and Profile Section */}
      <div className="header-nav">
        <p>Airbnb your home</p>
        <FaGlobe className="nav-icon" />
        <div className="profile-menu">
          <FaBars className="menu-icon" />
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </div>
  );
}
