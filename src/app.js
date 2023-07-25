require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/mongooseConnect");
const doctorsRoutes =  require("./routes/doctorsRoutes");
const healthInsuranceRoutes = require("./routes/healthInsuranceRoutes");
const personRoutes = require("./routes/personRoutes");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/t-endocrinologists/doctors", doctorsRoutes);
app.use("/t-endocrinologists/healthInsurance", healthInsuranceRoutes);
app.use("/t-endocrinologists", personRoutes);

module.exports = app