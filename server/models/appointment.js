const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: String,

  contactNumber: String,

  medicalInsurance: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no',
  },

  services: {
    type: String,
    enum: ['dental', 'other'],
    default: 'dental',
  },

  availableDate: Date,

  time: String,

  email: String,
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;
