import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";
import "../styles/profileSettings.css";

import {
  Search,
  Upload,
  Bell,
  User,
  Menu,
  FileText,
  Bookmark,
  Edit3,
} from "lucide-react";

export default function ProfileSettings() {
  const [fullName, setFullName] = useState("Mavis Izumi");
  const [email, setEmail] = useState("mavisizumi@gmail.com");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Load saved data on mount
  useEffect(() => {
    const savedFullName = localStorage.getItem("userFullName");
    const savedEmail = localStorage.getItem("userEmail");
    const savedFirstName = localStorage.getItem("userFirstName");
    const savedLastName = localStorage.getItem("userLastName");
    const savedProfilePic = localStorage.getItem("userProfilePic");

    if (savedFullName) setFullName(savedFullName);
    if (savedEmail) setEmail(savedEmail);
    if (savedFirstName) setFirstName(savedFirstName);
    if (savedLastName) setLastName(savedLastName);
    if (savedProfilePic) setProfilePic(savedProfilePic);
  }, []);

  // Handle profile image upload
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
        localStorage.setItem("userProfilePic", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save changes
  const handleSave = () => {
    const updatedFullName = `${firstName} ${lastName}`;
    setFullName(updatedFullName);
    setIsEditing(false);

    localStorage.setItem("userFullName", updatedFullName);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userFirstName", firstName);
    localStorage.setItem("userLastName", lastName);

    alert("Profile updated successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
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
          <Link to="/dashboard" className="nav-item">🏠 Dashboard</Link>
          <Link to="/materials" className="nav-item"><FileText size={18} /> My Materials</Link>
          <Link to="/downloads" className="nav-item"><Bookmark size={18} /> Downloads</Link>
          <Link to="/bookmarks" className="nav-item"><Bookmark size={18} /> Bookmarks</Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link active">⚙️ Settings</Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        {/* HEADER */}
        <header className="header">
          <div className="header-left">
            <button className="menu-btn"><Menu size={24} /></button>
            <div className="search-bar">
              <Search size={20} />
              <input type="text" placeholder="Search notes, subjects, teachers..." />
            </div>
          </div>

          <div className="header-right">
            <button className="upload-btn"><Upload size={18} /> Upload</button>
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="icon-btn"><User size={20} /></button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="profile-settings-container">
          <h2 className="settings-title">Settings</h2>
          <p className="settings-subtitle">
            Manage your profile and track your learning journey
          </p>

          {/* Profile Header */}
          <div className="profile-header-card">
            <div className="profile-photo-wrapper">
              <img
                src={profilePic || "https://via.placeholder.com/100?text=Profile"}
                alt="profile"
                className="profile-photo"
              />
              {isEditing && (
                <>
                  <label htmlFor="upload-profile" className="camera-overlay">
                    <Edit3 size={20} />
                  </label>
                  <input
                    id="upload-profile"
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicUpload}
                    className="upload-profile-input"
                  />
                </>
              )}
            </div>

            <div className="profile-info">
              <h3>{fullName}</h3>
              <p>{email}</p>
              <p>Information Technology</p>
            </div>

            {!isEditing && (
              <button className="edit-photo-btn" onClick={() => setIsEditing(true)}>
                <Edit3 size={16} />
              </button>
            )}
          </div>

          {/* Details Section */}
          <div className="profile-details-card">
            <div className="details-header">
              <h3>Profile Details</h3>
              {!isEditing ? (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  Edit <Edit3 size={16} />
                </button>
              ) : null}
            </div>

            <p className="details-subtext">Update your personal details.</p>

            <h4 className="section-title">PERSONAL INFORMATION</h4>

            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                value={firstName}
                disabled={!isEditing}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
              />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input
                type="text"
                value={lastName}
                disabled={!isEditing}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                value={email}
                disabled={!isEditing}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-buttons">
              {isEditing && (
                <>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                  <button className="save-btn" onClick={handleSave}>
                    Save Changes
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
