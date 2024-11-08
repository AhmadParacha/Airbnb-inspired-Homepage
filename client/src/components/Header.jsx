import React from 'react';

function Header() {
  return (
    <div className='header-container'>
    
      <img src={require('../Images/airbnb.png')} alt="Airbnb" className='mainlogo' />
        
        <div className='center-container'>
          <h1 className='welcomee'>Welcome To Airbnb</h1>
          {/* <img src={require('../Images/search.png')} alt="Search" className='Search' /> */}
          <input type='text' placeholder='Search Here...' className='search-bar' />
          
        </div>
    
    </div>
  );
}

export default Header;
