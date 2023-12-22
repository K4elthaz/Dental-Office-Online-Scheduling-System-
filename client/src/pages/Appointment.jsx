import React, { useState,useEffect, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
function AppointmentForm() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      className="p-5 w-100"
      style={{
        backgroundColor: "#eee",
        borderRadius: ".5rem .5rem 0 0",
        fontSize: "1.5rem",
        minHeight: "95vh",
      }}
    >
      <div className="row">
        <div className="col-12">
          <div
            className="card text-black"
            style={{ borderRadius: "25px", minHeight: "85vh" }}
          >
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mt-4">
                    Create an Appointment{" "}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col text-left">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="contactNumber" className="form-label">
                          Contact Number
                        </label>
                        <input
                          type="text"
                          id="contactNumber"
                          name="contactNumber"
                          className="form-control"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label
                          htmlFor="medicalInsurance"
                          className="form-label"
                        >
                          Medical Insurance
                        </label>
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
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="services" className="form-label">
                          Services
                        </label>
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
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="availableDate" className="form-label">
                          Available Date
                        </label>
                        <input
                          type="date"
                          id="availableDate"
                          name="availableDate"
                          value={formData.availableDate}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col text-left">
                        <label htmlFor="Time" className="form-label">
                          Time
                        </label>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-5" style={{ borderTop: "1px solid #000" }}>
                      <div className="mt-5 col text-right actionButtons">
                        <Button
                          style={{ fontSize: "1.5rem" }}
                          variant="success"
                          type="submit"
                        >
                          Create Appointment
                        </Button>
                      </div>
                    </div>
                  </form>
 
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentForm;
