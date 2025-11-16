import React, { useState, useEffect } from "react";

import "../styles/dashboard.css";
import { Link } from "react-router-dom";

import {
  Search,
  Upload,
  Bell,
  User,
  Menu,
  Bookmark,
  TrendingUp,
  FileText,
  MessageCircle,
  MoreVertical,
  Download // Import the Download icon
  
} from "lucide-react";

export default function Dashboard() {
  const [stats] = useState({
    uploadedNotes: { count: 24, change: "+3 this week" },
    bookmarked: { count: 156, change: "+12 this week" },
    totalDownloads: { count: "2.4K", change: "+18% this month" },
  });

  const [recentUploads] = useState([
    {
      id: 1,
      title: "Data Structures - Binary Trees",
      subject: "Computer Science",
      professor: "Prof. Anderson",
      fileType: "PDF",
      uploadTime: "2 hours ago",
      rating: 4.5,
      reviews: 23,
      downloads: 45,
    },
    {
      id: 2,
      title: "Calculus II - Integration Techniques",
      subject: "Mathematics",
      professor: "Dr. Martinez",
      fileType: "PPT",
      uploadTime: "5 hours ago",
      rating: 4.8,
      reviews: 42,
      downloads: 78,
    },
    {
      id: 3,
      title: "World History - Renaissance Era",
      subject: "History",
      professor: "Prof. Chen",
      fileType: "DOCX",
      uploadTime: "1 day ago",
      rating: 4.2,
      reviews: 18,
      downloads: 34,
    },
  ]);

  // Data for the "My Recent Downloads" section
  const [recentDownloads] = useState([
    {
      id: 4,
      title: "Physics I - Kinematics",
      subject: "Physics",
      professor: "Dr. Smith",
      fileType: "PDF",
      uploadTime: "30 min ago", 
      rating: 4.6,
      reviews: 55,
      downloads: 120, 
    },
    {
      id: 5,
      title: "Intro to Economics",
      subject: "Economics",
      professor: "Prof. Kim",
      fileType: "DOCX",
      uploadTime: "1 hour ago",
      rating: 4.1,
      reviews: 15,
      downloads: 22,
    },
     {
      id: 3,
      title: "World History - Renaissance Era",
      subject: "History",
      professor: "Prof. Chen",
      fileType: "DOCX",
      uploadTime: "1 day ago",
      rating: 4.2,
      reviews: 18,
      downloads: 34,
    },
  ]);


  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userFullName");
    if (name) setFullName(name);
  }, []);


  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : i < rating ? "half" : ""}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">📚</div>
          <div className="logo-text">
            <h1>TekNotes</h1>
            <p>Academic Resources</p>
          </div>
        </div>

        <nav className="nav-section">
          <h3 className="nav-title">Navigation</h3>
          <Link to="/dashboard" className="nav-item active">
            <span className="nav-icon">🏠</span>
            Dashboard
          </Link>
          <Link to="/materials" className="nav-item">
            <FileText size={18} />
            My Materials
          </Link>
          <Link to="/reviews" className="nav-item">
            <MessageCircle size={18} />
            Reviews
          </Link>
          {/* UPDATED: Changed icon to Download */}
          <Link to="/downloads" className="nav-item"> 
            <Download size={18} /> 
            Downloads
          </Link>
          <Link to="/bookmarks" className="nav-item">
            <Bookmark size={18} />
            Bookmarks
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link">
            ⚙️ Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="menu-btn">
              <Menu size={24} />
            </button>
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Search notes, subjects, teachers..." />
            </div>
          </div>
          <div className="header-right">
            <button className="upload-btn">
              <Upload size={18} />
              Upload
            </button>
            <button className="icon-btn">
              <Bell size={20} />
            </button>
            <button className="icon-btn">
              <User size={20} />
            </button>
          </div>
        </header>

        {/* Welcome Section */}
        <div className="welcome-section">
          <h2>Welcome back, {fullName || "Student"}!</h2>
          <p>Here's what's happening with your academic resources today.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {Object.entries(stats).map(([key, value], index) => (
            <div className="stat-card" key={index}>
              <div className="stat-header">
                <span className="stat-label">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                <div className={`stat-icon ${["red", "red", "red", "red"][index]}`}>
                  {(() => {
                    const icons = [FileText, Bookmark, TrendingUp];
                    const Icon = icons[index];
                    return <Icon size={24} />;
                  })()}
                </div>
              </div>
              <div className="stat-number">{value.count}</div>
              <div className={`stat-change ${index === 2 ? "active" : "positive"}`}>{value.change}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Recent Uploads */}
          <section className="content-section">
            <div className="section-header">
              <h3>Recent Uploads</h3>
              <Link to="/uploads" className="view-all">View all</Link>
            </div>

            <div className="uploads-list">
              {recentUploads.map((upload) => (
                <div key={upload.id} className="upload-card">
                  <div className="upload-icon">
                    <FileText size={24} />
                  </div>
                  <div className="upload-content">
                    <h4>{upload.title}</h4>
                    <p className="upload-meta">
                      {upload.subject} • {upload.professor}
                    </p>
                    <div className="upload-footer">
                      <div className="file-info-block">
                        <span className="file-type">{upload.fileType}</span>
                        <span className="upload-time">{upload.uploadTime}</span>
                      </div>
                      <div className="rating">
                        {renderStars(upload.rating)}
                        <span>
                          {upload.rating} ({upload.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="upload-actions">
                    <button className="more-btn">
                      <MoreVertical size={20} />
                    </button>
                    <button className="save-btn">
                      <Bookmark size={18} />
                      Save
                    </button>
                    <button className="download-btn">
                      <Download size={18} />
                      {upload.downloads}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* My Recent Downloads */}
          <section className="content-section downloads-section">
            <div className="section-header">
              <h3>Recent Downloads</h3>
              <Link to="/downloads" className="view-all">View all</Link>
            </div>

            <div className="uploads-list">
              {recentDownloads.map((download) => (
                <div key={download.id} className="upload-card">
                  <div className="upload-icon">
                    <FileText size={24} />
                  </div>
                  <div className="upload-content">
                    <h4>{download.title}</h4>
                    <p className="upload-meta">
                      {download.subject} • {download.professor}
                    </p>
                    <div className="upload-footer">
                      <div className="file-info-block">
                        <span className="file-type">{download.fileType}</span>
                        <span className="upload-time">{download.uploadTime}</span>
                      </div>
                      <div className="rating">
                        {renderStars(download.rating)}
                        <span>
                          {download.rating} ({download.reviews})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="upload-actions">
                    <button className="more-btn">
                      <MoreVertical size={20} />
                    </button>
                    <button className="save-btn">
                      <Bookmark size={18} />
                      Save
                    </button>
                    <button className="download-btn">
                      <Download size={18} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}