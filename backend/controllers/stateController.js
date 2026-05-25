import State from "../models/State.js";

export const addState =
  async (req, res) => {

    try {

      const newState =
        new State(req.body);

      await newState.save();

      res.status(201).json({
        message:
          "State added successfully",
      });

    } catch (error) {

      res.status(500).json({
        error:
          error.message,
      });

    }

};

export const getStates =
  async (req, res) => {

    try {

      const states =
        await State.find();

      res.json(states);

    } catch (error) {

      res.status(500).json({
        error:
          error.message,
      });

    }

};
export const deleteState =
  async (req, res) => {

    try {

      await State.findByIdAndDelete(
        req.params.id
      );

      res.json({
        message:
          "State deleted successfully",
      });

    } catch (error) {

      res.status(500).json({
        error:
          error.message,
      });

    }

};