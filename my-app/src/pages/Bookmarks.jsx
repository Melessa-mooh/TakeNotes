import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";   // ✅ ADDED useNavigate
import "../styles/dashboard.css";

import {
  Search,
  Upload,
  Bell,
  User,
  Menu,
  Bookmark,
  Users,
  TrendingUp,
  FileText,
  MoreVertical,
  MessageCircle,
  Download
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();   // ✅ REQUIRED FOR BUTTON REDIRECT

  const [stats] = useState({
    uploadedNotes: { count: 24, change: "+3 this week" },
    bookmarked: { count: 156, change: "+12 this week" },
    studyGroups: { count: 8, change: "2 active now" },
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

  const [studyGroups] = useState([
    {
      id: 1,
      name: "CS301 Study Group",
      description: "Algorithms & Data Structures",
      avatar: "CS",
      members: 24,
      lastActive: "15 min ago",
      color: "bg-blue-500",
      unread: 5,
    },
    {
      id: 2,
      name: "Calculus Warriors",
      description: "Advanced Calculus",
      avatar: "CA",
      members: 18,
      lastActive: "2 hours ago",
      color: "bg-indigo-500",
      unread: 0,
    },
    {
      id: 3,
      name: "Physics Lab Partners",
      description: "Quantum Physics",
      avatar: "PH",
      members: 12,
      lastActive: "1 hour ago",
      color: "bg-purple-500",
      unread: 3,
    },
  ]);

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userFullName");
    if (name) setFullName(name);
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`star ${
          i < Math.floor(rating) ? "filled" : i < rating ? "half" : ""
        }`}
      >
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

          <Link to="/groups" className="nav-item">
            <Users size={18} />
            Study Groups
          </Link>

          {/* ✅ BOOKMARKS LINK FIXED */}
          <Link to="/bookmarks" className="nav-item">
            <Bookmark size={18} />
            Bookmarks
          </Link>

          <Link to="/search" className="nav-item">
            <Search size={18} />
            Search
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
              <input
                type="text"
                placeholder="Search notes, subjects, teachers..."
              />
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
          <p>Here's what’s happening with your academic resources today.</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {Object.entries(stats).map(([key, value], index) => (
            <div className="stat-card" key={index}>
              <div className="stat-header">
                <span className="stat-label">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <div className={`stat-icon`}>
                  {(() => {
                    const icons = [FileText, Bookmark, Users, TrendingUp];
                    const Icon = icons[index];
                    return <Icon size={24} />;
                  })()}
                </div>
              </div>

              <div className="stat-number">{value.count}</div>
              <div className="stat-change positive">{value.change}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="content-grid">
          {/* Recent Uploads */}
          <section className="content-section">
            <div className="section-header">
              <h3>Recent Uploads</h3>
              <Link to="/uploads" className="view-all">
                View all
              </Link>
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
                      <span className="file-type">{upload.fileType}</span>
                      <span className="upload-time">{upload.uploadTime}</span>

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

                    {/* ⭐ FIXED: SAVE → GO TO BOOKMARKS */}
                    <button
                      className="save-btn"
                      onClick={() => navigate("/bookmarks")}
                    >
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

          {/* Study Groups */}
          <section className="content-section groups-section">
            <div className="section-header">
              <h3>My Study Groups</h3>
              <Link to="/groups" className="view-all">
                View all
              </Link>
            </div>

            <div className="groups-list">
              {studyGroups.map((group) => (
                <div key={group.id} className="group-card">
                  <div className="group-header">
                    <div className={`group-avatar ${group.color}`}>
                      {group.avatar}
                    </div>

                    <div className="group-info">
                      <h4>{group.name}</h4>
                      <p>{group.description}</p>
                      <div className="group-meta">
                        <Users size={14} />
                        <span>{group.members} members</span>
                      </div>
                    </div>

                    {group.unread > 0 && (
                      <div className="unread-badge">{group.unread}</div>
                    )}
                  </div>

                  <div className="group-footer">
                    <span className="last-active">{group.lastActive}</span>
                    <button className="chat-btn">
                      <MessageCircle size={16} />
                      Open Chat
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