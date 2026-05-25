const Destination = require("../models/Destination");

const getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();

    res.json(destinations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createDestination = async (req, res) => {
  try {
    const destination = await Destination.create(req.body);

    res.status(201).json(destination);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDestinations,
  createDestination,
};