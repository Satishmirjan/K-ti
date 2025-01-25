const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  deadline: { type: Date, required: true },
  budgetRange: {
    min: { type: Number, required: true },
    max: { type: Number, required: true }
  },
  description: String,
  bids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bid' }]
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
