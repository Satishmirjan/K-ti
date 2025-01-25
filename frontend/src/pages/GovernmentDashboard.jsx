import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function GovernmentDashboard() {
  const [projectData, setProjectData] = useState({
    projectName: '',
    deadline: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic
    console.log(projectData);
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
          bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Government Project Portal
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input 
              name="projectName"
              value={projectData.projectName}
              onChange={handleInputChange}
              placeholder="Project Name" 
              className="input-3d border-2 border-blue-200 
              rounded-xl p-3 focus:ring-4 focus:ring-blue-300 
              transition-all duration-300"
            />
            <input 
              name="deadline"
              type="date" 
              value={projectData.deadline}
              onChange={handleInputChange}
              className="input-3d border-2 border-blue-200 
              rounded-xl p-3 focus:ring-4 focus:ring-blue-300 
              transition-all duration-300"
            />
          </div>
          
          <textarea 
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
            placeholder="Project Description" 
            className="w-full border-2 border-blue-200 
            rounded-xl p-3 h-32 focus:ring-4 focus:ring-blue-300 
            transition-all duration-300"
          />
          
          <div className="flex justify-center">
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 
              text-white font-bold py-3 px-6 rounded-full 
              hover:from-blue-600 hover:to-purple-700 
              transform hover:scale-110 transition-all 
              shadow-lg hover:shadow-2xl"
            >
              Submit Project
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
