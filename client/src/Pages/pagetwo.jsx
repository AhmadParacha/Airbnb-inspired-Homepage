import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access the URL parameter
import Footer from '../components/Footer';
import '../Pagetwo.css'; // Import the CSS file
import PagetwoHeader from '../components/pagetwoheader';

export default function PageTwo() {
  const { id } = useParams(); // Get room ID from URL
  const [room, setRoom] = useState(null); // State to store room data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {
    // Fetch room details based on the room ID
    fetch(`http://localhost:8080/rooms/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }
        return response.json();
      })
      .then((data) => {
        setRoom(data); // Set room data
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch room details');
        setLoading(false);
      });
  }, [id]); // Run the effect when the room ID changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pagetwo-container">
      <PagetwoHeader />
      <img src={room.picture_url} alt={room.name} />
      <h4>{room.name}</h4>
      <h6><strong>BEDROOMS:</strong> {room.bedrooms}</h6>
      <h6><strong>BATHROOMS:</strong> {room.bathrooms}</h6>
      <h6><strong>STATUS:</strong> {room.status}</h6>
      <h6><strong>RATING:</strong> {room.rating}</h6>
      <h4 className="pagetwo-description">
      <strong>DESCRIPTION:</strong>
        <p>{room.description}</p>
      </h4>
      <Footer />
    </div>
  );
}
