import bcrypt from "bcrypt";
import Scout from "../models/Scout.js";

/*  REGISTER USER */
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, scoutId } =
      req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newScout = new Scout({
      firstName,
      lastName,
      email,
      password: passwordHash,
      confirmPassword: passwordHash,
      scoutId,
    });
    const savedScout = await newScout.save();
    res.status(201).json(savedScout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { scoutId, password } = req.body;
    const scout = await Scout.findOne({ scoutId: scoutId });
    if (!scout) return res.status(400).json({ msg: "Scout does not exist." });

    const isMatch = await bcrypt.compare(password, scout.password);
    if (!isMatch) return res.status(400).json({ msg: "Inavalid Credentials" });

    const token = jwt.sign({ id: scout._id }, process.env.JWT_SECRET);
    delete scout.password;
    res.status(200).json({ token, scout });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
