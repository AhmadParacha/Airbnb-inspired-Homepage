import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Header({ onSearchChange }) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the "Sign Up" page
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the "Log In" page
  };

  return (
    <div className="header-container">
      <img src={require('../Images/airbnb.png')} alt="Airbnb" className="mainlogo" />

      <div className="center-container">
        <h1 className="welcomee">Welcome To Airbnb</h1>
        <input
          type="text"
          placeholder="Search Here..."
          className="search-bar"
          onChange={onSearchChange}
        />
      </div>

      <div className="menu-container">
        <button className="auth-button" onClick={toggleModal}>
          Sign Up / Login
        </button>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Welcome to Airbnb</h2>
            <div className="auth-options">
              <button className="auth-option" onClick={handleSignUpClick}>
                Sign Up
              </button>
              <button className="auth-option" onClick={handleLoginClick}>
                Log In
              </button>
              <button className="auth-option">Other Option</button>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
