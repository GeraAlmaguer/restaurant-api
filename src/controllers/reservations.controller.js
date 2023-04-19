const getAllReservations = (req, res) => res.status(200).send('GET /reservations succeeded');

const createReservation = (req,res) => res.status(201).send('POST /reservations succeeded');

const getReservation = (req, res) => res.status(200).send('GET /reservations/:id succeeded');

const updateReservation = (req, res) => res.status(200).send('PUT /reservations/:id succeeded');

const deleteReservation = (req,res) => res.status(204).send();

module.exports = { getAllReservations, createReservation, getReservation, updateReservation, deleteReservation };