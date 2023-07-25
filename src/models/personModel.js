const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        versionKey: false
    }
)

const Model = mongoose.model("person", personSchema)

module.exports = Model