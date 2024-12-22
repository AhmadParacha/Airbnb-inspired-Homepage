require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app and middleware
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/airbnbdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// Airbnb model
const Airbnb = require('./Data/serverdata.js');

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// API Routes

// 1. Fetch all Airbnb listings
app.get('/', async (req, res) => {
  try {
    const airbnbs = await Airbnb.find();
    if (airbnbs.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.status(200).json(airbnbs);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching Airbnb data', error });
  }
});

// 2. Fetch a single Airbnb listing by ID
app.get('/', async (req, res) => {
  try {
    const id = req.params.id;
    const airbnb = await Airbnb.findOne({ id });
    if (!airbnb) {
      return res.status(404).json({ message: 'Airbnb listing not found' });
    }
    res.status(200).json(airbnb);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching Airbnb data', error });
  }
});

// 3. Add a new Airbnb listing
app.post('/api/airbnbs', async (req, res) => {
  try {
    const newAirbnb = new Airbnb(req.body);
    const savedAirbnb = await newAirbnb.save();
    res.status(201).json(savedAirbnb);
  } catch (error) {
    console.error('Error adding new Airbnb:', error);
    res.status(500).json({ message: 'Error adding new Airbnb', error });
  }
});

// 4. Update an existing Airbnb listing
app.put('/api/airbnbs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedAirbnb = await Airbnb.findOneAndUpdate({ id }, req.body, { new: true });
    if (!updatedAirbnb) {
      return res.status(404).json({ message: 'Airbnb listing not found' });
    }
    res.status(200).json(updatedAirbnb);
  } catch (error) {
    console.error('Error updating Airbnb:', error);
    res.status(500).json({ message: 'Error updating Airbnb', error });
  }
});

// 5. Delete an Airbnb listing
app.delete('/api/airbnbs/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedAirbnb = await Airbnb.findOneAndDelete({ id });
    if (!deletedAirbnb) {
      return res.status(404).json({ message: 'Airbnb listing not found' });
    }
    res.status(200).json({ message: 'Airbnb listing deleted successfully' });
  } catch (error) {
    console.error('Error deleting Airbnb:', error);
    res.status(500).json({ message: 'Error deleting Airbnb', error });
  }
});
