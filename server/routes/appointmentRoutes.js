const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
  } = require("../controllers/appointmentController"); // Import the controller functions

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Define thy noble routes for appointments
router.post("/appointments", createAppointment); // Create a new appointment
router.get("/appointments", getAppointments); // Get all appointments
router.get("/appointments/:id", getAppointmentById); // Get a specific appointment by ID
router.put("/appointments/:id", updateAppointment); // Update an existing appointment by ID
router.delete("/appointments/:id", deleteAppointment); // Delete an appointment by ID

module.exports = router; // Export these routes to be used in the realm of your application



