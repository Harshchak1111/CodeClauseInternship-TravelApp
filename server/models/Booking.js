const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
  date: { type: Date, required: true },
  people: { type: Number, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);