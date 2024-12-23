import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Footer from '../components/Footer';

function SignUpPage() {
  const [userData, setUserData] = useState({
    countryCode: '',
    phoneNumber: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    const { countryCode, phoneNumber, email, firstName, lastName, password, confirmPassword } = userData;

    // Validation: Ensure all fields are filled
    if (!countryCode || !phoneNumber || !email || !firstName || !lastName || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate that passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Store data (for simplicity, using localStorage)
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Your Account is created successfully now Login it!');

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '15px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'left', padding: '0px 30px' }}>
        <img
          src={require('../Images/airbnb.png')}
          alt="Airbnb Logo"
          style={{ height: '100px',width:'120px', cursor: 'pointer' }}
        />
      </div>
      {/* Header */}
      <h1>Sign Up</h1>
      <hr style={{ margin: '20px auto', width: '80%', borderColor: '#ddd' }} /> {/* Line separator */}

      {/* Body */}
      <h6>Welcome to the Sign-Up page! Please fill in your details below.</h6>

      {/* Form */}
      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
        {/* Country Code Input */}
        <label style={{ display: 'block', marginBottom: '5px', marginTop: '40px' }}>Country Code</label>
        <input
          type="text"
          name="countryCode"
          placeholder="e.g. +12"
          value={userData.countryCode}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Phone Number Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number e.g. 03xxxxxxxxx"
          value={userData.phoneNumber}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Email Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={userData.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* First Name Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          value={userData.firstName}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Last Name Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={userData.lastName}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Password Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={userData.password}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />

        {/* Confirm Password Input */}
        <label style={{ display: 'block', marginBottom: '5px' }}>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={userData.confirmPassword}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff5a5f',
          color: 'white',
          width: '20%',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Continue
      </button>

      {/* Paragraph below the form */}
      <p style={{ fontSize: '14px', color: '#555', marginTop: '80px' }}>
        We’ll call or text you to confirm your number. Standard message and data rates apply.{' '}
        <a href="#" style={{ color: '#007BFF', textDecoration: 'none' }}>Privacy Policy</a>
      </p>
      <Footer />
    </div>
  );
}

export default SignUpPage;
