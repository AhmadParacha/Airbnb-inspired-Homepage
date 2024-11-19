import React from 'react'
import iconArray from '../constants/constant';

export default function IconBar() {
  return (

    <div className='icon-bar'>
      
      {iconArray.map((item) => (
        <div className='icon-item'>
          <img src={item.src} className='icon' alt="logo" />
          <p>
            {item.title}
          </p>
        </div>
      ))
      }
    </div>
    
  );
}
