const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.Number, ref: 'Companies' },
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
});

const Ad = mongoose.model('ads', adSchema);

module.exports = Ad;
