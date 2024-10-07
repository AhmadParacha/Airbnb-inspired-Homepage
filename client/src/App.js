import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';

const App = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchListings = () => {
      const mockData = [
        {
          image: '/path/to/image1.jpg',
          title: 'Beautiful Beachfront House',
          type: 'Entire home',
          guests: 6,
          bedrooms: 3,
          bathrooms: 2,
          price: '$250',
          rating: 4.8,
        },
        // more mock listings
      ];
      setListings(mockData);
    };

    fetchListings();
  }, []); // Runs only once when the component mounts

  return (
    <>
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings">
        {listings.map((listing) => (
          <ListingCard key={listing.title} listing={listing} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default App;
