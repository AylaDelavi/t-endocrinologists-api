const mongoose = require("mongoose");
const healthInsuranceSchema = mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true
        },
        transSurgery: {
            type: Boolean,
            required: true
        },
        description: {
            type: String,
            minLength: 0,
            maxLength: 500,
            defautl: "Not informed."
        }
    },
    { timestamp: true }
);

const Model = mongoose.model("Health Insurance", healthInsuranceSchema);

module.exports = Model;