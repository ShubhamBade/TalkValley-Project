const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  _id : Number,
  name: String,
  url: String,
});

const Company = mongoose.model('Companies', companySchema);

module.exports = Company;
