const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  project: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project', 
    required: true 
  },
  estimatedCost: { type: Number, required: true },
  duration: { type: Number, required: true },
  rawMaterialCost: Number,
  laborCost: Number
}, { timestamps: true });

module.exports = mongoose.model('Bid', BidSchema);