import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../styles/auth.css";

export default function AuthForm({ mode, onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ fullName: name, email, password });


    if (mode === "register") {
      navigate("/login"); // after registration → go to Sign In
    } else {
      alert("Successfully logged in! (redirect to dashboard later)");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="logo">
          Tek<span>Notes</span>
        </h1>
        <h2>
          {mode === "login"
            ? "Welcome to Your Learning Hub"
            : "Create Your Account"}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">
            {mode === "login" ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <Link to={mode === "login" ? "/register" : "/login"}>
            {mode === "login" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
}