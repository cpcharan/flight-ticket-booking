import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");


  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  };


  const handleSignup = (e) => {

    e.preventDefault();


    // Name Validation
    if(user.name.trim().length < 3){

      setError("Name minimum 3 characters undali ❌");
      return;

    }


    // Email Validation
    if(!user.email.includes("@")){

      setError("Valid email enter cheyyi ❌");
      return;

    }


    // Password Validation
    if(user.password.length < 6){

      setError("Password minimum 6 characters undali ❌");
      return;

    }


    // Save User Data
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    setError("");

    alert("Signup Successful ✅");


    navigate("/login");

  };


  return (

    <div style={{
      width:"400px",
      margin:"50px auto",
      padding:"30px",
      background:"white",
      borderRadius:"10px",
      boxShadow:"0 5px 15px rgba(0,0,0,0.2)"
    }}>


      <h1 style={{
        textAlign:"center",
        color:"#2563EB"
      }}>
        📝 Signup
      </h1>


      {
        error && 
        <p style={{
          color:"red",
          textAlign:"center"
        }}>
          {error}
        </p>
      }



      <form onSubmit={handleSignup}>


        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          style={{
            width:"100%",
            padding:"12px",
            margin:"10px 0"
          }}
        />



        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          style={{
            width:"100%",
            padding:"12px",
            margin:"10px 0"
          }}
        />



        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          style={{
            width:"100%",
            padding:"12px",
            margin:"10px 0"
          }}
        />



        <button
          type="submit"
          style={{
            width:"100%",
            padding:"12px",
            background:"#2563EB",
            color:"white",
            border:"none",
            borderRadius:"5px",
            fontSize:"18px",
            cursor:"pointer"
          }}
        >
          Signup
        </button>


      </form>


    </div>

  );

}


export default Signup;