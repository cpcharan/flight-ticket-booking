import React from "react";
import FlightCard from "../components/FlightCard/FlightCard";
import flights from "../data/flights";

function Home() {
  return (
    <main>
      <h1>Welcome to SkyBook ✈️</h1>
      <p>Book your flight tickets easily.</p>

      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </main>
  );
}

export default Home;