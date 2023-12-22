import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);
  const localizer = momentLocalizer(moment);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

  useEffect(() => {
    if (user === null) {
      navigate("/");
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await axios.get("/appointments");
        const appointmentData = response.data;

        const transformedData = appointmentData.map((appointment) => {
          const startDate = new Date(appointment.availableDate);
          const startTime = moment(appointment.time, "HH:mm:ss");

          startDate.setHours(startTime.hour());
          startDate.setMinutes(startTime.minute());

          const formattedTime = startTime.format("hh:mm A");

          const title = `${appointment.name} - ${formattedTime}`;

          return {
            title,
            start: startDate,
            end: startDate,
          };
        });

        setEvents(transformedData);
        setIsLoading(false); // Set loading to false when data is loaded
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchAppointments();
  }, [user, navigate]);

  return (
    <div>
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <h1>Scheduled Appointments</h1>
        {user ? <h1>Welcome {user.name}</h1> : <h1>You are not logged in</h1>}
      </div>

      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
