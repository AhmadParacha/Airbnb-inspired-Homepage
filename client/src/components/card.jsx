import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ room }) {
  console.log(room); // Debugging the room object

  return (
    <div className="card-item">
      <img src={room.picture_url} className="roompic" />
      <div className="card-details">
        <h5 style={{ marginBottom: '5px' }}>
          <span>{room.name} </span>
          <span style={{ float: 'right' }}>*{room.rating }</span>
        </h5>
        <p style={{ marginBottom: '5px' }}>
          Bedrooms: {room.bedrooms} | Bathrooms: {room.bathrooms}
        </p>
        <p><strong>{room.price}</strong></p>
      </div>
    </div>
  );
}


export default Card;
