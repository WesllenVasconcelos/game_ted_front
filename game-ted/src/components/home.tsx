// src/components/Home.tsx
import React from 'react';
import Header from './header';

const Home = () => {
  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <h1>Welcome to GameTed</h1>
      <p>Explore our content and games.</p>
    </div>
  );
};

export default Home;
