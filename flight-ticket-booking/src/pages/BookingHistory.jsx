import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingHistory() {

  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    // Check login
    
const isLogin = localStorage.getItem("isLogin");

if (isLogin !== "true") {
   alert("Please Login First 🔐");
    navigate("/login");
    return;
}


    // Get booking history
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);

  }, [navigate]);


  const cancelBooking = (id) => {

    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);

    alert("Booking Cancelled ❌");

  };


  return (

    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "auto"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#2563EB"
        }}
      >
        📋 Booking History
      </h1>


      {bookings.length === 0 ? (

        <h2 style={{ textAlign: "center" }}>
          No Bookings Found ❌
        </h2>

      ) : (

        bookings.map((booking) => (

          <div
            key={booking.id}
            style={{
              background: "white",
              padding: "20px",
              margin: "20px 0",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.15)"
            }}
          >

            <h2>
              ✈️ {booking.airline}
            </h2>

            <p>
              <strong>Booking ID:</strong>{" "}
              {booking.id}
            </p>

            <p>
              <strong>Route:</strong>{" "}
              {booking.from} ➜ {booking.to}
            </p>

            <p>
              <strong>💺 Seat:</strong>{" "}
              {booking.seat}
            </p>

            <p>
              <strong>👥 Passengers:</strong>{" "}
              {booking.passengers}
            </p>

            <p>
              <strong>💰 Amount:</strong>{" "}
              ₹{booking.amount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              ✅ {booking.status}
            </p>


            <button
              onClick={() => cancelBooking(booking.id)}
              style={{
                padding: "10px 20px",
                background: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Cancel Booking
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default BookingHistory;