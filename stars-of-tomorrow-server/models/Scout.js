import mongoose from "mongoose";

const ScoutSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 2,
      max: 50,
    },
    scoutId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Scout = mongoose.model("Scout", ScoutSchema);
export default Scout;
