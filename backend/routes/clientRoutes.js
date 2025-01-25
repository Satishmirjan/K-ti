// backend/routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const Bid = require('../models/Bid');
const Project = require('../models/Project');

router.post('/bids', async (req, res) => {
  try {
    const newBid = new Bid(req.body);
    await newBid.save();
    
    // Update project with new bid
    await Project.findByIdAndUpdate(
      req.body.project,
      { $push: { bids: newBid._id } }
    );
    
    res.status(201).json(newBid);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;