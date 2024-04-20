import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">Quickly Take Home</Link>
        <div className="flex">
          <Link to="/login" className="text-white hover:text-gray-300 mx-2">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300 mx-2">Signup</Link>
          <Link to="/profile" className="text-white hover:text-gray-300 mx-2">My Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;