const controller = require("../controllers/healthInsuranceController");
const express = require("express");

const router = express.Router();

router.get("/name", controller.findHealthInsuranceByName);
router.get("/allHealthInsurances", controller.findAllHealthInsurances);
router.get("/id/:id", controller.findHealthInsuranceById);
router.post("/addHealthInsurance", controller.addNewHealthInsurance);
router.patch("/update/:id", controller.updateHealthInsuranceById);
router.delete("/delete/:id", controller.deleteHealthInsuranceById);

module.exports = router