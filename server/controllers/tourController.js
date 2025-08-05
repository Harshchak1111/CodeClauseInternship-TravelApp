const Tour = require('../models/Tour');

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tours' });
  }
};

module.exports = { getAllTours };