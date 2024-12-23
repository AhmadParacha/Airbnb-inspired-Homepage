import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import '../Pagetwo.css';
import PagetwoHeader from '../components/pagetwoheader';
 

export default function PageTwo() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let a =1;
  useEffect(() => {
    alert(id);
    a=id;
    fetch(`http://localhost:8080/rooms/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch room details');
        }
        return response.json();
      })
      .then((data) => {
        setRoom(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch room details');
        setLoading(false);
      });
  }, [id]);

  const handleBooking = async (id) => {
    try {
      console.log('ID passed to handleBooking:', id); 
      const response = await fetch(`http://localhost:8080/rooms/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Status: 'Not Available' }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update room status');
      }
  
      const updatedRoom = await response.json();
      setRoom(updatedRoom);
    } catch (error) {
      console.error('Error updating room status:', error);
      alert('Failed to update room status. Please try again.');
    }
  };
  

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
      <h6>
        <strong>STATUS:</strong>{' '}
        <span
          style={{
            color: room.Status.toLowerCase() === 'available' ? 'green' : 'red',
          }}
        >
          {room.Status}
        </span>
        {room.Status.toLowerCase() === 'available' && (
          <button className="book-now-button" onClick={handleBooking}>
            Book Now
          </button>
        )}
      </h6>
      <h6><strong>RATING:</strong> {room.rating}</h6>
      <h4 className="pagetwo-description">
        <strong>DESCRIPTION:</strong>
        <p>{room.description}</p>
      </h4>
      <Footer />
    </div>
  );
}
