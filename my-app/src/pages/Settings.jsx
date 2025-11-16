import React from "react";
import "../styles/dashboard.css"; 
import "../styles/settings.css"; 
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
  Bookmark,
} from "lucide-react";

export default function Settings() {
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

          <Link to="/dashboard" className="nav-item">
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
          <Link to="/settings" className="settings-link active">
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

        {/* Settings Page Content */}
        <div className="settings-page">
          <h2 className="settings-title">Settings</h2>
          <p className="settings-subtitle">
            Manage your profile and track your learning journey
          </p>

          {/* Profile Settings Card */}
          <Link to="/settings/profile" className="settings-card-link">
            <div className="settings-card">
              <div className="settings-icon">👤</div>
              <div>
                <h3>Profile Settings</h3>
                <p>Manage your profile and personal information</p>
              </div>
            </div>
          </Link>

          {/* Account Settings Card */}
          <Link to="/settings/account" className="settings-card-link">
            <div className="settings-card">
              <div className="settings-icon">🔒</div>
              <div>
                <h3>Account Settings</h3>
                <p>Email, password and security settings</p>
              </div>
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
