import mongoose from "mongoose";

const AthleteSchema = new mongoose.Schema(
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
        number: {
            type: String,
            require: true,
            min: 1,
            max: 3
        },
        postion: {
            type: String,
            require: true,
            min: 1,
            max: 10
        },
        throws: {
            type: String,
            require: true,
            min: 1,
            max: 2
        },
        bats: {
            type: String,
            require: true,
            min: 1,
            max: 2
        },
        class: {
            type: String,
            require: true,
            min: 4,
            max: 9
        },
        eventID: {
            type: String,
            require: true,
            min: 1,
            max: 10
        }
    },
    { timestamps: true }
);

const Athlete = mongoose.model("Athlete", AthleteSchema);
export default Athlete;