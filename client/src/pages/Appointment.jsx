import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "", // Updated field name to 'contactNumber'
    email: "",
    medicalInsurance: "no",
    services: "dental",
    availableDate: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setFormData({
        name: "",
        contactNumber: "",
        email: "",
        medicalInsurance: "no",
        services: "dental",
        availableDate: "",
        time: "",
      });
      const response = await axios.post("/appointments", formData);
      toast.success("Appointment created successfully");
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>{" "}
          {/* Updated field name */}
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="medicalInsurance">Medical Insurance:</label>
          <select
            id="medicalInsurance"
            name="medicalInsurance"
            value={formData.medicalInsurance}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div>
          <label htmlFor="services">Services:</label>
          <select
            id="services"
            name="services"
            value={formData.services}
            onChange={handleChange}
          >
            <option value="dental">Dental</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="availableDate">Available Date:</label>
          <input
            type="date"
            id="availableDate"
            name="availableDate"
            value={formData.availableDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentForm;
