import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardinfo from '../constants/cardinfo'; 

function Card() {
  return (
    <div className="card-container">
      {Cardinfo.map((item, index) => (
        <div className="card-item" key={index}>
          <img src={item.sorc} className="roompic" alt="Room" />
          <div className="card-details">
            <h5 style={{ marginBottom: '5px' }}>
              <span>{item.title}{item.country}</span>
              <span style={{ float: 'right' }}>*{item.rating}</span>
            </h5>
            <p style={{ marginBottom: '5px' }}>{item.dat}</p>
            <p style={{ marginBottom: '5px' }}>{item.distance}</p>
            <p><strong>{item.price}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
