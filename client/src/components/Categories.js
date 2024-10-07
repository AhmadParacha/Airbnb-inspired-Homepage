import React, { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const categories = ['Beachfront', 'Cabins', 'Trending', 'Unique stays'];

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={category === activeCategory ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
