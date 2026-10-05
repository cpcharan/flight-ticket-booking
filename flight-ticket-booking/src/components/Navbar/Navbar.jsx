import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin") === "true"
  );


  useEffect(() => {

    const checkLogin = () => {

      setIsLogin(
        localStorage.getItem("isLogin") === "true"
      );

    };

    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };

  }, []);


  const handleLogout = () => {

    localStorage.removeItem("isLogin");

    localStorage.removeItem("loggedInUser");

    setIsLogin(false);

    alert("Logout Successful 👋");

    navigate("/login");

  };


  return (

    <nav className="navbar">

      <div className="logo">
        ✈️ SkyBook
      </div>


      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/search">Search Flights</Link>
        </li>

        <li>
          <Link to="/flights">Flights</Link>
        </li>

        <li>
          <Link to="/booking-history">
            Booking History
          </Link>
        </li>

      </ul>


      <div className="login-btn">

        {isLogin ? (

          <button onClick={handleLogout}>
            Logout
          </button>

        ) : (

          <button onClick={() => navigate("/login")}>
            Login
          </button>

        )}

      </div>

    </nav>

  );

}

export default Navbar;