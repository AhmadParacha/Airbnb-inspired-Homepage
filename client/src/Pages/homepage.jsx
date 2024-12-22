import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IconBar from '../components/Iconbar';
import Card from '../components/card';
import Footer from '../components/Footer';

export default function HomePage() {
  const [roomlist, setRoomlist] = useState([]); // State to store all room data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors

  useEffect(() => {

    fetch('http://localhost:8080/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        setRoomlist(data); 
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch rooms');
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header />
      <IconBar />
      <div className='row'>
        {roomlist.map((room, index) => (
          <Card key={index} room={room} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
