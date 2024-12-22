import React from 'react';

function Header({ onSearchChange }) {
  return (
    <div className="header-container">
      <img src={require('../Images/airbnb.png')} alt="Airbnb" className="mainlogo" />

      <div className="center-container">
        <h1 className="welcomee">Welcome To Airbnb</h1>
        <input
          type="text"
          placeholder="Search Here..."
          className="search-bar"
          onChange={onSearchChange} // Calling the passed function on input change
        />
      </div>

      <div className="menu-container">
        <button className="auth-button">
          Sign Up / Login
        </button>
      </div>
    </div>
  );
}

export default Header;
