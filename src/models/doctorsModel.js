const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        service: {
            type: [String],
            required: true
        },
        publicPrivateHealthInsurance: {
            type: [Boolean],
            required: true
        },
        city: {
            type: String,
            required: true
        },
        about: {
            type: String,
            minLength: 0,
            maxLength: 500,
            default: "Not informed."
        },
        phoneNumber: {
            type: Number,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true
        },
        healthInsurance: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Health Insurance"
        }
    },
    { timestamp: true }
);

const Model = mongoose.model("Doctor", doctorSchema);

module.exports = Model;