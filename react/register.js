import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-form">

        <h2>Register</h2>

        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Mobile Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <select>
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="date" />

        <button>Create Account</button>

      </div>
    </div>
  );
}

export default Register;