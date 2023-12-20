const Appointment = require("../models/appointment");

const createAppointment = async (req, res) => {
  try {
    const appointmentData = req.body;

    const requiredFields = [
      "name",
      "contactNumber",
      "email",
      "medicalInsurance",
      "services",
      "availableDate",
      "time",
    ];

    for (const field of requiredFields) {
      if (!appointmentData[field]) {
        return res
          .status(400)
          .json({ error: `Missing required field: ${field}` });
      }
    }

    const appointment = new Appointment(appointmentData);

    await appointment.save();

    return res.status(201).json(appointment);
  } catch (error) {
    return res.status(500).json({ error: "Error creating appointment" });
  }
};

const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching appointments" });
  }
};

const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching appointment" });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedData = req.body;

    const appointment = await Appointment.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ error: "Error updating appointment" });
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findByIdAndRemove(id);

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: "Error deleting appointment" });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
