const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  people: { type: Number, required: true },
  reservationDate: { type: Date, required: true },
});


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;