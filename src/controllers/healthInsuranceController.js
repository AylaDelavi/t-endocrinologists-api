const HealthInsuranceModel = require("../models/healthInsuranceModel");

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllHealthInsurances = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            return res.status(401).send("You forgot to pass the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                return res.status(403).send("Unauthorized access.")
            }

        const allHealthInsurances = await HealthInsuranceModel.find();
        res.status(200).json(allHealthInsurances)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
        message: error.message
        })
    }
}

const findHealthInsuranceById = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            return res.status(401).send("You forgot to pass the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                return res.status(403).send("Unauthorized access.")
            }

        const findHealthInsurance = await HealthInsuranceModel.findById(req.params.id)
        res.status(200).json(findHealthInsurance)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
        message: error.message
        })
    }
}

const findHealthInsuranceByName = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            res.status(401).send("You forgot to pass the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                res.status(403).send("Unauthorized access.")
            }

        const { name } = req.query
        const findName = await HealthInsuranceModel.find({ name })
        console.log(findName)
        if (!findName) {
            res.status(404).json({
                message: "There is no Health Insurance with this name."
            })
        res.status(200).json(findName)
        }
        })
    } catch (error) {
        res.status(500).josn({
            message: error.message
        })
    }
}

const addNewHealthInsurance = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            return res.status(401).send("You forgot to passe the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                return res.status(403).send("Unauthorized access.")
            }

         const {
            name,
            phoneNumber,
            transSurgery,
            description} = req.body
        const newHealthInsurance = new HealthInsuranceModel({
            name,
            phoneNumber,
            transSurgery,
            description})
        const savedHealthInsurance = await newHealthInsurance.save()
        res.status(201).json({
            message: "New Health Insurance successfully added!",
            savedHealthInsurance
        })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const updateHealthInsuranceById = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            return res.status(401).send("You forgot to pass the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                return res.status(403).send("Unauthorized access.")
            }

        const {
            name,
            phoneNumber,
            transSurgery,
            description} = req.body
         const updateHealthInsurance = await HealthInsuranceModel.findByIdAndUpdate(req.params.id, {
            name,
            phoneNumber,
            transSurgery,
            description
            })
        res.status(200).json({
            message: "Health Insurance successfully updated",
            updateHealthInsurance
         })
     })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteHealthInsuranceById = async (req, res) => {
    try {
        const authHeader = req.get("authorization")

        if (!authHeader) {
            res.status(401).send("You forgot to pass the authorization information.")
        }

        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function(error) {
            if (error) {
                return res.status(403).send("Unauthorized access.")
            }

        const {id} = req.params
        const deleteHealthInsurance = await HealthInsuranceModel.findByIdAndDelete(id)
        const message = `Health Insurance: ${deleteHealthInsurance.name} successfully deleted!`
        res.status(200).json({
            message
        })
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    findAllHealthInsurances,
    findHealthInsuranceById,
    addNewHealthInsurance,
    findHealthInsuranceByName,
    updateHealthInsuranceById,
    deleteHealthInsuranceById
}