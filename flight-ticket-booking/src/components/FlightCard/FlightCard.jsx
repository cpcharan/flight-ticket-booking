import React from "react";
import "./FlightCard.css";
import { useNavigate } from "react-router-dom";

function FlightCard({ flight }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking", {
      state: {
        flight,
      },
    });
  };

  return (
    <div className="flight-card">
      <div className="flight-header">
        <h2>✈️ {flight.airline}</h2>
        <span className="price">₹{flight.price}</span>
      </div>

      <div className="flight-details">
        <div>
          <h3>{flight.from}</h3>
          <p>{flight.departure}</p>
        </div>

        <div className="flight-line">
          ✈️
          <br />
          {flight.duration}
        </div>

        <div>
          <h3>{flight.to}</h3>
          <p>{flight.arrival}</p>
        </div>
      </div>

      <button className="book-btn" onClick={handleBooking}>
        Book Now
      </button>
    </div>
  );
}

export default FlightCard;