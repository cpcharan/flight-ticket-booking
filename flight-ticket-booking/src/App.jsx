import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Flights from "./pages/Flights";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Confirmation from "./pages/Confirmation";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SeatSelection from "./pages/SeatSelection";
import BookingHistory from "./pages/BookingHistory";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/flights" element={<Flights />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/payment" element={<Payment />} />

        <Route path="/confirmation" element={<Confirmation />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/seat-selection"
          element={<SeatSelection />}
        />

        <Route
          path="/booking-history"
          element={<BookingHistory />}
        />

      </Routes>

      <Footer />
    </>
  );
}

export default App;