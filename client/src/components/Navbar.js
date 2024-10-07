import React from 'react';

const Navbar = () => (
  <nav>
    <div className="logo">Airbnb</div>
    <ul>
      <li>Home</li>
      <li>Experiences</li>
      <li>Online Experiences</li>
    </ul>
    <div className="user-menu">
      <button>Login</button>
      <button>Signup</button>
    </div>
  </nav>
);
export default Navbar;
