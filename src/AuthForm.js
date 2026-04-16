import React, { useState } from 'react';
import './App.css';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="card">

        {/* Tabs */}
        <div className="tabs">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Heading */}
        <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

        {/* Inputs */}
        {!isLogin && (
          <input type="text" placeholder="Full Name" />
        )}

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        {/* Forgot Password (only in login) */}
        {isLogin && (
          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>
        )}

        {/* Button */}
        <button className="login-btn">
          {isLogin ? "Login" : "Signup"}
        </button>

        {/* Toggle Text */}
        <p className="signup-text">
          {isLogin ? "Not a member?" : "Already have an account?"}{" "}
          <span
            style={{ color: "#007bff", cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup now" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
}