import React, { useState } from 'react';
import '../App.css'

function Header({ onSearchChange }) {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
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
          onChange={onSearchChange} // Calling the passed function on input change
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
            
            <div className="auth-options">
              <button className="auth-option">Sign Up</button>
              <button className="auth-option">Log In</button>
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
