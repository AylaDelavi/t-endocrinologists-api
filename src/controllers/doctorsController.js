const DoctorsModel = require("../models/doctorsModel");
const HealthInsuranceModel = require("../models/healthInsuranceModel");

const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const mongoose = require("mongoose");

const findAllDoctors = async (req, res) => {
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
            console.log(new mongoose.Types.ObjectId())
        const allDoctors = await DoctorsModel.find()
        res.status(200).json(allDoctors)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorById = async (req, res) => {
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

        const findDoctor = await DoctorsModel.findById(req.params.id)
        if (findDoctor == null) {
        res.status(404).json({
            message: "Doctor not found."
        })
        }
        res.status(200).json(findDoctor)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorByName = async (req, res) => {
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

        const { name } = req.query
        const findName = await DoctorsModel.find({ name: name })
        console.log(findName)
        if (!findName.length) {
            return res.status(404).json({
                message: "There are no doctors with that name, please check if you typed it right!"
            })
        }
        res.status(200).json(findName)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorByCity = async (req, res) => {
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

                const { city } = req.query
        const findCity = await DoctorsModel.find({ city: city})
        console.log(findCity)
        if (!findCity.length) {
            return res.status(404).json({
                message: "There are no doctors focused on trans people in this city :( !!"
            })
        }
        res.status(200).json(findCity)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorByPublicPrivateHealthInsurance = async (req, res) => {
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

                const { publicPrivateHealthInsurance } = req.query
        const findService = await DoctorsModel.find({ publicPrivateHealthInsurance })
        console.log(findService)
        if (!findService.length) {
            return res.status(404).json({
                message: "There are no doctors who provide this service."
            })
        }
        res.status(200).json(findService)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorByService = async (req, res) => {
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

        const { service } = req.query
        const findService = await DoctorsModel.find({ service })
        console.log(findService)
        if (!findService.length) {
            return res.status(404).json({
                message: "There are no doctors who provide this service."
            })
        }
        res.status(200).json(findService)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const findDoctorByGender = async (req, res) => {
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

        const { gender } = req.query
        const findGender = await DoctorsModel.find({ gender })
        console.log(findGender)
        if (!findGender) {
            return res.status(404).json({
                message: "There are no doctors with this gender, please check if you typed it right!"
            })
        }
        res.status(200).json(findGender)
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewDoctor = async (req, res) => {
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
            healthInsuranceId,
            name,
            age,
            service,
            publicPrivateHealthInsurance,
            city,
            about,
            phoneNumber,
            gender} = req.body
            if (!healthInsuranceId) {
                return res.status(400).json({
                message: "Required: Enter the Health Insurance Id!"
                })
            }
        const findHealthInsurance = await HealthInsuranceModel.findById(healthInsuranceId)
        if (!findHealthInsurance) {
            return res.status(404).json({
                 message: "Health Insurance not found."
            })
        }
        const newDoctor = new DoctorsModel({
            healthInsurance: healthInsuranceId,
            name,
            age,
            service,
            publicPrivateHealthInsurance,
            city,
            about,
            phoneNumber,
            gender
        })
        const savedDoctor = await newDoctor.save()
        res.status(200).json({
            message: "New Doctor added Successfully!",
            savedDoctor
        })
    })   
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const updateDoctorById = async (req, res) => {
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

        const { id } = req.params
        const {
            healthInsuranceId,
            name,
            age,
            service,
            publicPrivateHealthInsurance,
            city,
            about,
            phoneNumber,
            gender} = req.body
            const findDoctor = await DoctorsModel.findById(id)
            if (findDoctor == null) {
                res.status(404).json({
                    message: "Doctor not found."
                })
            };

            if (healthInsuranceId) {
                const findHealthInsurance = await DoctorsModel.findById(healthInsuranceId)

                if (findHealthInsurance == null) {
                    return res.status(404).json({
                        message: "Health Insurance not found."
                    })
                }
            };
            findDoctor.name = name || findDoctor.name;
            findDoctor.age = age || findDoctor.age;
            findDoctor.service = service || findDoctor.service;
            findDoctor.publicPrivateHealthInsurance = publicPrivateHealthInsurance || findDoctor.publicPrivateHealthInsurance;
            findDoctor.city = city || findDoctor.city;
            findDoctor.about = about || findDoctor.about;
            findDoctor.phoneNumber = phoneNumber || findDoctor.phoneNumber;
            findDoctor.gender = gender || findDoctor.gender;

            const savedDoctor = await findDoctor.save();
            res.status(200).json({
                message: "Doctor successfully updated!",
                savedDoctor
            })
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const deleteDoctorById = async (req, res) => {
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

        const { id } = req.params
        const findDoctor = await DoctorsModel.findByIdAndDelete(id)
        if (findDoctor == null) {
            return res.status(404).json({
                message: `Doctor with id ${id} not found.`
            })
        }
        res.status(200).json({
            message: `Doctor with ${id} successfully deleted!`
        })
        })
    } catch (error) {
        res.status(500)({
            message: error.message
        })
    }
}

module.exports = {
    findAllDoctors,
    findDoctorById,
    addNewDoctor,
    findDoctorByName,
    findDoctorByCity,
    findDoctorByPublicPrivateHealthInsurance,
    findDoctorByService,
    findDoctorByGender,
    updateDoctorById,
    deleteDoctorById
}