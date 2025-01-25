import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg transform transition-all hover:scale-[1.02] duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 
              hover:text-blue-800 transition-colors 
              transform hover:scale-105">
              Project Bidding Platform
            </h1>
          </div>
          <div className="flex space-x-4">
            <Link to="/government" className="px-3 py-2 rounded-md text-sm font-medium 
              bg-blue-500 text-white hover:bg-blue-600 
              transform hover:scale-110 transition-all">
              Government
            </Link>
            <Link to="/client" className="px-3 py-2 rounded-md text-sm font-medium 
              bg-green-500 text-white hover:bg-green-600 
              transform hover:scale-110 transition-all">
              Client
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
