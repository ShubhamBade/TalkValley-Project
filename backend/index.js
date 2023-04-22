const express = require('express');
const mongoose = require('mongoose');
const adsRouter = require('./Routes/ads');
const cors = require('cors');

const app = express();
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/TalkValley', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));

// Use the ads router
app.use('/api/ads', adsRouter);

// Start the server
app.listen(5000, () => console.log('Server started on port 5000'));
