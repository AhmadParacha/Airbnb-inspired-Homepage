import React from 'react';
import iconArray from '../constants/constant';

export default function IconBar({ onIconClick }) {
  return (
    <div className='icon-bar'>
      {iconArray.map((item, index) => (
        <div
          key={index}
          className='icon-item'
          onClick={onIconClick} // Call the function when the icon is clicked
          style={{ cursor: 'pointer' }} // Add cursor styling to indicate clickable
        >
          <img src={item.src} className='icon' alt="logo" />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}
