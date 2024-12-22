import React, { useState } from 'react';

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const handleAuthClick = () => {
    const action = isLogin ? "Logging in..." : "Signing up...";
    alert(`${action} Please provide your details.`);
  };

  return (
    <div className="header-container">
      <img src={require('../Images/airbnb.png')} alt="Airbnb" className="mainlogo" />

      <div className="center-container">
        <h1 className="welcomee">Welcome To Airbnb</h1>
        <input type="text" placeholder="Search Here..." className="search-bar" />
      </div>

      <div className="menu-container">
        <button className="auth-button" onClick={handleAuthClick}>
          Sign Up / Login
        </button>
      </div>
    </div>
  );
}

export default Header;
