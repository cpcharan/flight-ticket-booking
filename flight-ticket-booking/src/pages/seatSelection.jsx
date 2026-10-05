import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SeatSelection.css";

function SeatSelection() {

  const navigate = useNavigate();
  const location = useLocation();

  const flight = location.state?.flight;

  // 👥 Booking page nunchi passengers receive chestham
  const passengers = location.state?.passengers || 1;


  // 💺 Multiple seats store cheyyadaniki array
  const [selectedSeats, setSelectedSeats] = useState([]);


  // ✈️ All seats
  const seats = [
    "A1", "A2", "A3",
    "B1", "B2", "B3",
    "C1", "C2", "C3",
    "D1", "D2", "D3"
  ];


  // ❌ Already booked seats
  const bookedSeats = [
    "A2",
    "B3",
    "C1"
  ];


  // 💺 Seat select
  const selectSeat = (seat) => {

    // Already booked?
    if (bookedSeats.includes(seat)) {

      alert("This seat is already booked ❌");

      return;
    }


    // Already selected?
    if (selectedSeats.includes(seat)) {

      // Seat click again chesthe remove chestham
      setSelectedSeats(
        selectedSeats.filter(
          (item) => item !== seat
        )
      );

      return;
    }


    // Passenger count kanna ekkuva seats select cheyyakudadhu
    if (selectedSeats.length >= passengers) {

      alert(
        `You can select only ${passengers} seat(s) 👥`
      );

      return;
    }


    // New seat add
    setSelectedSeats([
      ...selectedSeats,
      seat
    ]);

  };


  // 💳 Continue Payment
  const continueBooking = () => {

    // Required number of seats select chesara?
    if (selectedSeats.length !== passengers) {

      alert(
        `Please select ${passengers} seat(s) ❌`
      );

      return;
    }


    navigate("/payment", {

      state: {
        flight: flight,
        seats: selectedSeats,
        passengers: passengers
      }

    });

  };


  return (

    <div className="seat-container">

      <h1>💺 Select Your Seat</h1>


      {/* Passenger Information */}

      <h3 style={{ textAlign: "center" }}>

        👥 Passengers: {passengers}

      </h3>


      <p style={{ textAlign: "center" }}>

        Select {passengers} seat
        {passengers > 1 ? "s" : ""}

      </p>


      {/* Seat Layout */}

      <div className="seat-layout">

        {

          seats.map((seat) => (

            <button

              key={seat}

              className={

                bookedSeats.includes(seat)

                  ? "seat booked"

                  : selectedSeats.includes(seat)

                  ? "seat selected"

                  : "seat"

              }

              onClick={() => selectSeat(seat)}

            >

              {seat}

            </button>

          ))

        }

      </div>


      {/* Selected Seats */}

      <h2>

        💺 Selected Seats:{" "}

        {selectedSeats.length > 0

          ? selectedSeats.join(", ")

          : "None"

        }

      </h2>


      {/* Seat Count */}

      <p style={{ textAlign: "center" }}>

        Selected: {selectedSeats.length} / {passengers}

      </p>


      {/* Continue */}

      <button

        className="continue-btn"

        onClick={continueBooking}

      >

        Continue To Payment 💳

      </button>


    </div>

  );

}

export default SeatSelection;