import React, { useState } from "react";
import "../styles/accountSettings.css";
import { Link } from "react-router-dom";
import {
  Search,
  Upload,
  Bell,
  User,
  Menu,
  FileText,
  MessageCircle,
  Users,
  Bookmark
} from "lucide-react";

export default function AccountSettings() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated!");
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
          <Link to="/dashboard" className="nav-item">
            🏠 Dashboard
          </Link>
          <Link to="/materials" className="nav-item">
            <FileText size={18} /> My Materials
          </Link>
          <Link to="/reviews" className="nav-item">
            <MessageCircle size={18} /> Reviews
          </Link>
          <Link to="/groups" className="nav-item">
            <Users size={18} /> Study Groups
          </Link>
          <Link to="/bookmarks" className="nav-item">
            <Bookmark size={18} /> Bookmarks
          </Link>
          <Link to="/search" className="nav-item">
            <Search size={18} /> Search
          </Link>
        </nav>

        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link active">
            ⚙️ Settings
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main-content">
        <header className="header">
          <div className="header-left">
            <button className="menu-btn"><Menu size={24} /></button>
          </div>
          <div className="header-right">
            <button className="upload-btn"><Upload size={18} /> Upload</button>
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="icon-btn"><User size={20} /></button>
          </div>
        </header>

        <div className="settings-wrapper">
          <h1>Settings</h1>
          <p>Manage your account preferences and privacy settings</p>

          <div className="settings-card">
            <h2>Account Settings</h2>

            <form onSubmit={handleSubmit}>
              <label>Email address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <h3>Change Password</h3>

              <label>Current password</label>
              <input
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />

              <div className="password-row">
                <div>
                  <label>New password</label>
                  <input
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label>Confirm password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="save-btn">Update Password</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
