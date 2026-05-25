import express from "express";

import {
  addState,
  getStates,
  deleteState,
} from "../controllers/stateController.js";

const router =
  express.Router();

router.post(
  "/add",
  addState
);

router.get(
  "/all",
  getStates
);

router.delete(
  "/delete/:id",
  deleteState
);

export default router;