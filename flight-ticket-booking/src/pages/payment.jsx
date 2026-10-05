import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const flight = location.state?.flight;

  const seats = location.state?.seats || [];

  const passengers = location.state?.passengers || 1;


  // 💰 Total Amount
  const totalAmount = flight
    ? Number(flight.price) * passengers
    : 0;


  // 💳 Payment Completed
  const handlePayment = () => {

    // Generate Booking ID
    const bookingId =
      "SKY" +
      Math.floor(
        100000 + Math.random() * 900000
      );


    // 📦 Booking Object
    const newBooking = {

      bookingId: bookingId,

      airline: flight?.airline || "",

      from: flight?.from || "",

      to: flight?.to || "",

      seats: seats,

      passengers: passengers,

      amount: totalAmount

    };


    // 📋 Existing bookings
    const oldBookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];


    // 💾 Save booking
    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...oldBookings,
        newBooking
      ])
    );


    // 🎫 Go to Confirmation
    navigate("/confirmation", {

      state: {

        flight: flight,

        seats: seats,

        passengers: passengers,

        bookingId: bookingId,

        amount: totalAmount

      }

    });

  };


  return (

    <div
      style={{
        width: "600px",
        margin: "40px auto",
        padding: "30px",
        background: "white",
        borderRadius: "15px",
        boxShadow:
          "0 5px 20px rgba(0,0,0,0.2)"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#2563EB"
        }}
      >
        💳 Payment
      </h1>


      {/* ✈️ Flight Details */}

      {flight && (

        <div
          style={{
            background: "#f3f4f6",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "25px"
          }}
        >

          <h2>
            ✈️ {flight.airline}
          </h2>


          <p>
            <strong>From:</strong>{" "}
            {flight.from}
          </p>


          <p>
            <strong>To:</strong>{" "}
            {flight.to}
          </p>


          <p>
            <strong>Departure:</strong>{" "}
            {flight.departure || "08:30 AM"}
          </p>


          <p>
            <strong>Arrival:</strong>{" "}
            {flight.arrival || "11:15 AM"}
          </p>


          <p>
            <strong>💺 Seats:</strong>{" "}

            {seats.length > 0
              ? seats.join(", ")
              : "Not Selected"
            }

          </p>


          <p>
            <strong>👥 Passengers:</strong>{" "}
            {passengers}
          </p>


          <h2
            style={{
              color: "#16a34a"
            }}
          >
            💰 Total Amount: ₹{totalAmount}
          </h2>

        </div>

      )}


      {/* 📱 QR Payment */}

      <h2
        style={{
          textAlign: "center"
        }}
      >
        📱 Scan QR Code to Pay
      </h2>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0"
        }}
      >

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=SkyBookPayment"
          alt="Payment QR Code"
          style={{
            width: "250px",
            height: "250px"
          }}
        />

      </div>


      <p
        style={{
          textAlign: "center",
          fontSize: "16px"
        }}
      >
        Scan the QR code using any UPI app
      </p>


      {/* ✅ Payment Button */}

      <button
        onClick={handlePayment}
        style={{
          width: "100%",
          padding: "15px",
          background: "#16a34a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "15px"
        }}
      >
        Payment Completed ✅
      </button>


    </div>

  );

}

export default Payment;