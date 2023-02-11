import express from "express";
import { getEvent, addEvent } from "../controllers/events";
import { verifyToken } from "../middleware/auth";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getEvent);

/* UPDATE */
router.patch("/:id/:eventId", verifyToken, addEvent);

export default router;
