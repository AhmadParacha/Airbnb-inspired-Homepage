import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import Header from '../components/Header';
import IconBar from '../components/Iconbar';
import Card from '../components/card';
import Footer from '../components/Footer';

export default function HomePage() {
  const [roomlist, setRoomlist] = useState([]); // State to store all room data
  const [filteredRooms, setFilteredRooms] = useState([]); // State to store filtered room data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track errors
  const [searchQuery, setSearchQuery] = useState(''); // State to store search input

  useEffect(() => {
    // Fetch all rooms on component mount
    fetch('http://localhost:8080/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch rooms');
        }
        return response.json();
      })
      .then((data) => {
        setRoomlist(data); // Save fetched data to state
        setFilteredRooms(data); // Initialize filteredRooms with all rooms
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Failed to fetch rooms');
        setLoading(false);
      });
  }, []);

  // Filter rooms based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === '') {
      setFilteredRooms(roomlist); // If no search query, show all rooms
    } else {
      const filtered = roomlist.filter((room) =>
        room.name.toLowerCase().includes(query.toLowerCase()) // Case insensitive search
      );
      setFilteredRooms(filtered);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <IconBar />
      
    <div className='cardscss'>
        {filteredRooms.map((room, index) => (
            <Link className='linkcss' key={index} to={`/listing/${room.id}`} style={{ textDecoration: 'none' }}>
            <Card room={room} />
            </Link>
                    ))}
    </div>

      
      <Footer />
    </div>
  );
}
