const controller = require("../controllers/doctorsController");
const express = require("express");

const router = express.Router();

router.get("/gender", controller.findDoctorByGender);
router.get("/services", controller.findDoctorByService);
router.get("/publicPrivateHealthInsurance", controller.findDoctorByPublicPrivateHealthInsurance);
router.get("/doctorcity", controller.findDoctorByCity);
router.get("/doctorname", controller.findDoctorByName);
router.get("/allDoctors", controller.findAllDoctors);
router.get("/:id", controller.findDoctorById);
router.post("/addDoctor", controller.addNewDoctor);
router.patch("/:id", controller.updateDoctorById);
router.delete("/:id", controller.deleteDoctorById);

module.exports = router