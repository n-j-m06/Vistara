const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    placeName: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    bestTime: {
      type: String,
    },

    image: {
      type: String,
    },

    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Destination",
  destinationSchema
);