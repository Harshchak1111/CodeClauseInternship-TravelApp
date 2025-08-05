import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <Link to="/">Travel Buddy</Link>
      </div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tours" className="hover:underline">Tours</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
