import React, { useState } from 'react';
import Footer from '../components/Footer';
function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      if (parsedData.email === email && parsedData.password === password) {
        alert('Login successful!');
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No user data found. Please sign up first.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Airbnb Logo */}
      <div style={{ textAlign: 'left', padding: '10px 20px' }}>
        <img
          src={require('../Images/airbnb.png')}
          alt="Airbnb Logo"
          style={{ height: '100px',width:'120px', cursor: 'pointer' }}
        />
      </div>

      {/* Login Header */}
      <h1 style={{ marginBottom: '10px' }}><strong>Log In</strong></h1>
      <hr style={{ margin: '0 auto 20px', width: '80%', borderColor: '#ddd' }} /> {/* Border line below the heading */}

      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '10px',
          width: '50%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <br />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: '10px',
          marginBottom: '10px',
          width: '50%',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <br />

      {/* Forgot Password Link */}
      <div style={{ marginBottom: '20px' }}>
        <a
          href="#"
          style={{
            color: '#007BFF',
            textDecoration: 'none',
            fontSize: '14px',
          }}
          onClick={(e) => e.preventDefault()} // Placeholder functionality
        >
          Forgot Password?
        </a>
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff5a5f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom:'150px',
        }}
      >
        Log In
      </button>
      <Footer/>
    </div>
  );
}

export default LoginPage;
