import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import GovernmentDashboard from './pages/GovernmentDashboard';
import ClientDashboard from './pages/ClientDashboard';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <BrowserRouter>
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/government" element={<GovernmentDashboard />} />
            <Route path="/client" element={<ClientDashboard />} />
          </Routes>
        </motion.div>
      </BrowserRouter>
    </div>
  );
}