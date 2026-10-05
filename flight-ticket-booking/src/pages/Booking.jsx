import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Booking() {

  const navigate = useNavigate();
  const location = useLocation();

  const flight = location.state?.flight;

  const [passengers, setPassengers] = useState(1);


  // 🔐 Login Check
  useEffect(() => {

    const isLogin = localStorage.getItem("isLogin");

    if (isLogin !== "true") {

      alert("Please Login First 🔐");

      navigate("/login");

    }

  }, [navigate]);


  // ➕ Increase Passengers
  const increasePassengers = () => {

    if (passengers < 6) {

      setPassengers(passengers + 1);

    }

  };


  // ➖ Decrease Passengers
  const decreasePassengers = () => {

    if (passengers > 1) {

      setPassengers(passengers - 1);

    }

  };


  // Continue to Seat Selection
  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/seat-selection", {

      state: {
        flight: flight,
        passengers: passengers
      }

    });

  };


  return (

    <div
      style={{
        width: "500px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        background: "#fff"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#2563EB"
        }}
      >
        👤 Passenger Details
      </h1>


      {/* Flight Details */}

      {flight && (

        <div
          style={{
            background: "#f3f4f6",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "20px"
          }}
        >

          <h2>✈️ Selected Flight</h2>

          <p>
            <strong>Airline:</strong>{" "}
            {flight.airline}
          </p>

          <p>
            <strong>Route:</strong>{" "}
            {flight.from} ➜ {flight.to}
          </p>

          <p>
            <strong>Price per Passenger:</strong>{" "}
            ₹{flight.price}
          </p>

        </div>

      )}


      <form onSubmit={handleSubmit}>

        {/* Name */}

        <input
          type="text"
          placeholder="Full Name"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            boxSizing: "border-box"
          }}
        />


        {/* Email */}

        <input
          type="email"
          placeholder="Email"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            boxSizing: "border-box"
          }}
        />


        {/* Phone */}

        <input
          type="tel"
          placeholder="Phone Number"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            boxSizing: "border-box"
          }}
        />


        {/* Passenger Count */}

        <h3
          style={{
            textAlign: "center"
          }}
        >
          👥 Number of Passengers
        </h3>


        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            margin: "20px 0"
          }}
        >

          {/* Minus */}

          <button
            type="button"
            onClick={decreasePassengers}
            style={{
              width: "45px",
              height: "45px",
              fontSize: "22px",
              cursor: "pointer"
            }}
          >
            −
          </button>


          {/* Passenger Number */}

          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold"
            }}
          >
            {passengers}
          </span>


          {/* Plus */}

          <button
            type="button"
            onClick={increasePassengers}
            style={{
              width: "45px",
              height: "45px",
              fontSize: "22px",
              cursor: "pointer"
            }}
          >
            +
          </button>

        </div>


        {/* Total Amount */}

        <p
          style={{
            textAlign: "center",
            fontSize: "18px"
          }}
        >

          <strong>Total Amount:</strong>{" "}

          ₹{flight ? flight.price * passengers : 0}

        </p>


        {/* Continue Button */}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Continue To Seat Selection 💺
        </button>

      </form>

    </div>

  );

}

export default Booking;