import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FlightCard from "../components/FlightCard/FlightCard";
import flights from "../data/flights";

function Flights() {

  const location = useLocation();

  const search = location.state?.search;

  const [airline, setAirline] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("All");


  let filteredFlights = flights;


  // Search Filter
  if(search){
    filteredFlights = filteredFlights.filter((flight)=>{

      return (
        flight.from.toLowerCase()
        .includes(search.from.toLowerCase())
        &&
        flight.to.toLowerCase()
        .includes(search.to.toLowerCase())
      );

    });
  }


  // Airline Filter
  if(airline !== "All"){

    filteredFlights = filteredFlights.filter((flight)=>{

      return flight.airline === airline;

    });

  }


  // Price Filter
  if(price === "low"){

    filteredFlights = filteredFlights.filter((flight)=>{

      return flight.price <= 5000;

    });

  }
  else if(price === "high"){

    filteredFlights = filteredFlights.filter((flight)=>{

      return flight.price > 5000;

    });

  }



  // Sorting

  if(sort === "asc"){

    filteredFlights.sort((a,b)=>a.price-b.price);

  }

  if(sort === "desc"){

    filteredFlights.sort((a,b)=>b.price-a.price);

  }



  return (

    <div style={{padding:"30px"}}>


      <h1 style={{textAlign:"center",color:"#2563EB"}}>
        ✈️ Available Flights
      </h1>



      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        margin:"30px"
      }}>


        <select 
        onChange={(e)=>setAirline(e.target.value)}
        >

          <option value="All">
            All Airlines
          </option>

          <option value="IndiGo">
            IndiGo
          </option>

          <option value="Air India">
            Air India
          </option>

          <option value="Akasa Air">
            Akasa Air
          </option>

          <option value="SpiceJet">
            SpiceJet
          </option>

          <option value="Vistara">
            Vistara
          </option>

        </select>



        <select
        onChange={(e)=>setPrice(e.target.value)}
        >

          <option value="All">
            All Prices
          </option>

          <option value="low">
            Below ₹5000
          </option>

          <option value="high">
            Above ₹5000
          </option>

        </select>



        <select
        onChange={(e)=>setSort(e.target.value)}
        >

          <option value="All">
            Sort By
          </option>

          <option value="asc">
            Lowest Price
          </option>

          <option value="desc">
            Highest Price
          </option>


        </select>


      </div>



      {
        filteredFlights.length > 0 ?

        filteredFlights.map((flight)=>(

          <FlightCard
          key={flight.id}
          flight={flight}
          />

        ))

        :

        <h2 style={{
          textAlign:"center",
          color:"red"
        }}>
          ❌ No Flights Found
        </h2>
      }


    </div>

  );

}


export default Flights;