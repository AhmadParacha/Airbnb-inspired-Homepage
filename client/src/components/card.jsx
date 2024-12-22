import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ room }) {
  return (
    <div className="card-item">
      <img src={room.pic_url} className="roompic" alt="Room" />
      <div className="card-details">
        <h5 style={{ marginBottom: '5px' }}>
          <span>{room.title} {room.location}</span>
          <span style={{ float: 'right' }}>*{room.rating || "N/A"}</span>
        </h5>
        <p style={{ marginBottom: '5px' }}>{room.description}</p>
        <p style={{ marginBottom: '5px' }}>
          Bedrooms: {room.bedrooms} | Bathrooms: {room.bathrooms}
        </p>
        <p><strong>{room.price}</strong></p>
      </div>
    </div>
  );
}

export default Card;
