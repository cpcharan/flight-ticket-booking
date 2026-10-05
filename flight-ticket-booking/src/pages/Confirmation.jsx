import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {

  const location = useLocation();
  const navigate = useNavigate();

  const flight = location.state?.flight;
  const seat = location.state?.seat;
  const passengers = location.state?.passengers || 1;
  const bookingId = location.state?.bookingId;
  const amount = location.state?.amount;


  // 🔐 Login Check
  useEffect(() => {

    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "true") {

      alert("Please Login First 🔐");

      navigate("/login");

    }

  }, [navigate]);


  // 🖨️ Print Ticket
  const handlePrint = () => {
    window.print();
  };


  return (

    <div className="confirmation-page">

      {/* 🎫 Ticket */}

      <div className="ticket-card">

        <div className="ticket-header">

          <h1>🎉 Booking Confirmed!</h1>

          <p>
            Your flight ticket has been booked successfully.
          </p>

        </div>


        {flight ? (

          <div className="ticket-details">

            <h2>✈️ SkyBook Flight Ticket</h2>


            <div className="ticket-row">
              <strong>🆔 Booking ID:</strong>
              <span>{bookingId || "N/A"}</span>
            </div>


            <div className="ticket-row">
              <strong>✈️ Airline:</strong>
              <span>{flight.airline}</span>
            </div>


            <div className="ticket-row">
              <strong>📍 From:</strong>
              <span>{flight.from}</span>
            </div>


            <div className="ticket-row">
              <strong>📍 To:</strong>
              <span>{flight.to}</span>
            </div>


            <div className="ticket-row">
              <strong>💺 Seat:</strong>
              <span>{seat || "Not Selected"}</span>
            </div>


            <div className="ticket-row">
              <strong>👥 Passengers:</strong>
              <span>{passengers}</span>
            </div>


            <div className="ticket-row">
              <strong>💰 Total Amount:</strong>
              <span>
                ₹{amount || Number(flight.price) * passengers}
              </span>
            </div>


            <div className="ticket-row">

              <strong>💳 Payment:</strong>

              <span className="success">
                Successful ✅
              </span>

            </div>


            <div className="ticket-status">

              🎫 BOOKING CONFIRMED

            </div>

          </div>

        ) : (

          <h2 className="not-found">
            Booking Details Not Found ❌
          </h2>

        )}


        {/* Buttons */}

        <div className="confirmation-buttons">

          <button
            className="print-button"
            onClick={handlePrint}
          >
            🖨️ Print Ticket
          </button>


          <button
            className="history-button"
            onClick={() => navigate("/booking-history")}
          >
            📋 Booking History
          </button>


          <button
            className="home-button"
            onClick={() => navigate("/")}
          >
            🏠 Go Home
          </button>

        </div>

      </div>

    </div>

  );

}

export default Confirmation;