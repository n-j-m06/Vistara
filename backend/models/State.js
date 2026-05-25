import mongoose from "mongoose";

const stateSchema =
  new mongoose.Schema({

    name: {
      type: String,
      required: true,
    },

    hero: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    famousPlaces: [
      String,
    ],

    food: [
      String,
    ],

    culture: {
      type: String,
    },

    bestTime: {
      type: String,
    },

    officialLink: {
      type: String,
    },

    image: {
      type: String,
    },

  });

export default mongoose.model(
  "State",
  stateSchema
);