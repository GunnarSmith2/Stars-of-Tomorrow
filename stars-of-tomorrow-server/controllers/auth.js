import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import Scout from "../models/Scout.js";

/*  REGISTER USER */
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, scoutId } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newScout = new Scout({
      firstName,
      lastName,
      email,
      password: passwordHash,
      scoutId,
    });
    const savedScout = await newScout.save();
    res.status(201).json(savedScout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
