const PersonModel = require("../models/personModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const create = async (req,res) => {
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashPassword

    const person = new PersonModel(req.body)
    try {
        await person.save()
        res.status(201).send(person.toJSON())
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }       
}

const getAll = async (req, res) => {
    try {
        const getAllPersons = await PersonModel.find()
        res.status(200).json(getAllPersons)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }   
}


const deleteById = async (req, res) => {
    try {
        const { id } = req.params
        await PersonModel.findByIdAndDelete(id)
        const message = `Person with id: ${id} successfully deleted!`
        res.status(200).json({
            message
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const personLogin = await PersonModel.findOne({email: req.body.email})
        if (!personLogin) {
            res.status(404).json({
                message: `There are no person with email: ${req.body.email}.`
            })
        }
        const validPassword = bcrypt.compareSync(req.body.password, personLogin.password)
        if (!validPassword) {
            res.status(403).json({
                message: "Incorrect password!"
            })
        }
        const token = jwt.sign({email: req.body.email}, SECRET)
        return res.status(200).send(token)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports ={
    create,
    getAll,
    deleteById,
    login
}