import React from 'react';

const ListingCard = ({ listing }) => (
  <div className="listing-card">
    <img src={listing.image} alt={listing.title} />
    <h3>{listing.title}</h3>
    <p>{listing.type}</p>
    <p>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms</p>
    <p>{listing.price} per night</p>
    <p>Rating: {listing.rating}</p>
  </div>
);

export default ListingCard;
