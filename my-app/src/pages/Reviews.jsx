import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/dashboard.css'; // main dashboard styles
import '../styles/reviews.css';   // extra reviews-specific styles

import {
  Search,
  Upload,
  Bell,
  User,
  FileText,
  ThumbsUp,
  MessageCircle,
  Bookmark,
  //Users,
  Menu,
  MoreVertical,
  Download
} from "lucide-react";

// Render stars for rating
const renderStars = (rating) => (
  [...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`star ${i < Math.floor(rating) ? "filled" : i < rating ? "half" : ""}`}
    >
      ⭐
    </span>
  ))
);

// Review Card (matches Dashboard Recent Upload)
const ReviewItem = ({ review }) => (
  <div className="upload-card">
    <div className="upload-icon">
      <FileText size={24} />
    </div>
    <div className="upload-content">
      <h4>{review.title}</h4>
      <p className="upload-meta">{review.subject} • {review.professor}</p>
      <div className="upload-footer">
        <span className="file-type">{review.fileType}</span>
        <span className="upload-time">{review.reviewTime}</span>
        <div className="rating">
          {renderStars(review.rating)}
          <span>{review.rating} ({review.reviewsCount})</span>
        </div>
      </div>
    </div>
    <div className="upload-actions">
      <button className="more-btn"><MoreVertical size={20} /></button>
      <button className="save-btn"><Bookmark size={18} /> Save</button>
      <button className="download-btn"><Download size={18} /> {review.downloads || 0}</button>
    </div>
  </div>
);

// Main Reviews Component
export default function Reviews() {
  const [reviewStats] = useState({
    reviewsWritten: { count: 4, change: "" },
    avgRating: { count: 4.3, change: "" },
    likesReceived: { count: 3, change: "" },
  });

  const [myReviews] = useState([
    { id: 1, title: "Data Structures - Binary Trees", subject: "Computer Science", professor: "Prof. Anderson", fileType: "PDF", reviewTime: "2 hours ago", rating: 4.5, reviewsCount: 23 },
    { id: 2, title: "Calculus II - Integration Techniques", subject: "Mathematics", professor: "Dr. Martinez", fileType: "PPT", reviewTime: "5 hours ago", rating: 4.8, reviewsCount: 42 },
    { id: 3, title: "World History - Renaissance Era", subject: "History", professor: "Prof. Chen", fileType: "DOCX", reviewTime: "1 day ago", rating: 4.2, reviewsCount: 18 },
    { id: 4, title: "Algorithms Design", subject: "Computer Science", professor: "Prof. Smith", fileType: "PDF", reviewTime: "1 day ago", rating: 4.0, reviewsCount: 30 },
  ]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">📚</div>
          <div className="logo-text"><h1>TekNotes</h1><p>Academic Resources</p></div>
        </div>
        <nav className="nav-section">
          <h3 className="nav-title">Navigation</h3>
          <Link to="/dashboard" className="nav-item"><span className="nav-icon">🏠</span> Dashboard</Link>
          <Link to="/materials" className="nav-item"><FileText size={18} /> My Materials</Link>
          <Link to="/reviews" className="nav-item active"><MessageCircle size={18} /> Reviews</Link>
           <Link to="/downloads" className="nav-item"> 
                        <Download size={18} /> 
                        Downloads
                       </Link>
          <Link to="/bookmarks" className="nav-item"><Bookmark size={18} /> Bookmarks</Link>
          
        </nav>
        <div className="sidebar-footer">
          <Link to="/settings" className="settings-link">⚙️ Settings</Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="menu-btn"><Menu size={24} /></button>
            <h1 className="reviews-page-title">Reviews</h1>
          </div>
          <div className="header-right">
            <button className="upload-btn"><Upload size={18} /> Upload</button>
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="icon-btn"><User size={20} /></button>
          </div>
        </header>

        {/* Stats */}
        <div className="stats-grid">
          {Object.entries(reviewStats).map(([key, value], index) => (
            <div className="stat-card" key={index}>
              <div className="stat-header">
                <span className="stat-label">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                <div className="stat-icon red">
                  {index === 0 && <MessageCircle size={24} />}
                  {index === 1 && <>⭐</>}
                  {index === 2 && <ThumbsUp size={24} />}
                </div>
              </div>
              <div className="stat-number">{value.count}</div>
              <div className="stat-change">{value.change}</div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="reviews-toolbar-wrapper">
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search reviews..." />
          </div>
          <select className="subject-filter">
            <option>All Subjects</option>
            <option>Computer Science</option>
            <option>Mathematics</option>
          </select>
          <button className="my-reviews-btn">My Reviews</button>
        </div>

        {/* Reviews List */}
        <div className="reviews-list-wrapper">
          <section className="content-section">
            <div className="uploads-list">
              {myReviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
