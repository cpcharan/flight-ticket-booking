import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();

  const [search, setSearch] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();

    navigate("/flights", {
      state: {
        search,
      },
    });
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#2563EB" }}>
        🔍 Search Flights
      </h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="from"
          placeholder="From"
          value={search.from}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="text"
          name="to"
          placeholder="To"
          value={search.to}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
          }}
        />

        <input
          type="date"
          name="date"
          value={search.date}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563EB",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Search Flights
        </button>
      </form>
    </div>
  );
}

export default Search;