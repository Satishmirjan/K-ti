import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClientDashboard() {
  const [bidData, setBidData] = useState({
    projectId: '',
    bidAmount: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBidData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic
    console.log(bidData);
  };

  return (
    <div className="container mx-auto p-6">
      <motion.div 
        className="bg-white shadow-2xl rounded-2xl p-8 
        transform transition-all hover:scale-[1.01] 
        hover:shadow-3xl perspective-1000"
        initial={{ rotateX: 10, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-green-600 to-teal-600 mb-6">
            Submit
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <select 
            name="projectId"
            value={bidData.projectId}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-green-200 
            rounded-xl focus:ring-4 focus:ring-green-300 
            transition-all duration-300"
          >
            <option value="">Select Project</option>
            {/* Add project options dynamically here  */}
          </select>
          
          <input 
            name="bidAmount"
            type="number"
            value={bidData.bidAmount}
            onChange={handleInputChange}
            placeholder="Bid Amount" 
            className="w-full p-3 border-2 border-green-200 
            rounded-xl focus:ring-4 focus:ring-green-300 
            transition-all duration-300"
          />
          
          <textarea
            name="description"
            value={bidData.description}
            onChange={handleInputChange}
            placeholder="Bid Description"
            className="w-full p-3 border-2 border-green-200 
            rounded-xl focus:ring-4 focus:ring-green-300 
            transition-all duration-300"
          />
          
          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-gradient-to-r from-green-500 to-teal-600 
              text-white font-bold py-3 px-6 rounded-full 
              hover:from-green-600 hover:to-teal-700 
              transform hover:scale-110 transition-all 
              shadow-lg hover:shadow-2xl"
            >
              Submit Bid
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}