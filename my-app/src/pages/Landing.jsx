import React from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";


export default function Landing() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">
          Tek<span>Notes</span>
        </h1>
        <h2>Your Centralized Learning Platform</h2>
        <p>
          Access reliable, well-organized study materials in one place.
          Streamline your learning journey today.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link to="/login">
            <button className="auth-btn">Sign In</button>
          </Link>
          <Link to="/register">
            <button className="auth-btn" style={{ background: "#d48b2f" }}>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}