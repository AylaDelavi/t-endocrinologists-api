const controller = require("../controllers/personController");
const express = require("express");
const router = express.Router();

router.post("/person", controller.create);
router.get("/person", controller.getAll);
router.delete("/person/:id", controller.deleteById);
router.post("/person/login", controller.login);

module.exports = router