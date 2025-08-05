const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  const { tourId, date, people } = req.body;
  try {
    const booking = new Booking({
      userId: req.user.id,
      tourId,
      date,
      people
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Booking failed', error: err });
  }
});

module.exports = router;