import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  };


  const handleLogin = (e) => {

    e.preventDefault();

    setError("");


    // Get Signup user
    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );


    // Check user exists
    if (!savedUser) {

      setError("Please Signup First ❌");
      return;

    }


    // Check email and password
    if (
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {

      // Save login status
      localStorage.setItem(
        "isLogin",
        "true"
      );


      // Save logged-in user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(savedUser)
      );


      alert("Login Successful ✅");

      navigate("/");

    } 
    else {

      setError("Invalid Email or Password ❌");

    }

  };


  return (

    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "30px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,.2)"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#2563EB"
        }}
      >
        🔐 Login
      </h1>


      {error && (

        <p
          style={{
            color: "red",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          {error}
        </p>

      )}


      <form onSubmit={handleLogin}>


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            boxSizing: "border-box"
          }}
        />


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0",
            boxSizing: "border-box"
          }}
        />


        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Login
        </button>


      </form>


      <p
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        Don't have an account?
      </p>


      <button
        onClick={() => navigate("/signup")}
        style={{
          width: "100%",
          padding: "10px",
          background: "#2563EB",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Create Account
      </button>


    </div>

  );

}

export default Login;