import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          <span className="highlight">Tek</span>Notes
        </h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/login")} className="btn-text">
            Sign In
          </button>
          <button onClick={() => navigate("/register")} className="btn-primary">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <p className="tagline">Your Centralized Learning Platform</p>
        <h2 className="hero-title">
          Access All Your Study Materials <br /> <span>In One Place</span>
        </h2>
        <p className="hero-desc">
          Stop wasting hours searching the internet. TekNotes provides reliable,
          well-organized learning materials for all your courses—so you can
          focus on what matters most: learning.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => navigate("/register")}>
            Get Started Free
          </button>
          <button className="btn-outline" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
      </section>

      {/* Features Section (3x3 grid) */}
      <section className="features">
        <h3>Everything You Need to Study Smarter</h3>
        <p>Powerful tools designed to simplify your study experience</p>
        <div className="feature-grid">
          {[
            { title: "Upload & Share", desc: "Upload PDFs, PPTs, and notes to share with your peers." },
            { title: "Smart Search", desc: "Find materials quickly using subjects, tags, or teacher names." },
            { title: "Study Groups", desc: "Create verified groups to chat and share files in real time." },
            { title: "Rate & Review", desc: "Provide feedback and rate notes to help others." },
            { title: "Bookmark Materials", desc: "Save and organize your favorite study resources." },
            { title: "Personalized Profile", desc: "Set preferences to get relevant material suggestions." },
            
          ].map((item, i) => (
            <div className="feature-card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How TekNotes Works */}
<section className="how-it-works">
  <h3>
    How <span className="highlight">TekNotes</span> Works
  </h3>
  <p>Discover how TekNotes helps students access, organize, and share knowledge easily.</p>
  <div className="steps">
    <div className="step">
      <div className="icon-circle">1</div>
      <h4>Sign Up</h4>
      <p>Create your account to start exploring a world of student notes and resources.</p>
    </div>
    <div className="step">
      <div className="icon-circle">2</div>
      <h4>Browse Notes</h4>
      <p>Search by subject or topic and instantly access shared materials from other students.</p>
    </div>
    <div className="step">
      <div className="icon-circle">3</div>
      <h4>Upload & Share</h4>
      <p>Contribute your own notes to help others while building your academic reputation.</p>
    </div>
  </div>
      </section>

      {/* Why Students Love TekNotes */}
      <section className="why-love">
        <h3>
          Why Students Love <span className="highlight">TekNotes</span>
        </h3>
        <p>Designed by students, for students.</p>
        <div className="reasons">
          <div>
            <h4>⏱ Save Time</h4>
            <p>Find everything in one place—no more endless searching.</p>
          </div>
          <div>
            <h4>📚 Stay Organized</h4>
            <p>Access materials neatly organized by subject.</p>
          </div>
          <div>
            <h4>🤝 Collaborate Better</h4>
            <p>Join study groups, exchange files, and learn together.</p>
          </div>
          <div>
            <h4>✅ Quality Assured</h4>
            <p>Access only verified and high-quality learning materials.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
