import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';

const mockListings = [
  {
    image: '/path/to/image.jpg',
    title: 'Beautiful Beachfront House',
    type: 'Entire home',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: '$250',
    rating: 4.8,
  },
  // more listings
];

const App = () => (
  <>
    <Navbar />
    <SearchBar />
    <Categories />
    <div className="listings">
      {mockListings.map((listing) => (
        <ListingCard key={listing.title} listing={listing} />
      ))}
    </div>
    <Footer />
  </>
);

export default App;
