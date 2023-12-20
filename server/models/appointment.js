const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the appointment schema
const appointmentSchema = new Schema({
  // User's name from context
  name: String,

  // Contact phone number
  contactNumber: String,

  // Medical Insurance (yes or no)
  medicalInsurance: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no', // Default value is 'no'
  },

  // Services (dental or other services)
  services: {
    type: String,
    enum: ['dental', 'other'],
    default: 'dental', // Default value is 'dental'
  },

  // Available Date
  availableDate: Date,

  // Time
  time: String,

  // User's email from context
  email: String,
});

// Create the Mongoose model for appointments
const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;
