import { useState } from "react";
import "./bookmarks.css";

export default function Bookmarks() {
  const [searchTerm, setSearchTerm] = useState("");

  const dummyData = [
    {
      id: 1,
      title: "Data Structures - Binary Trees",
      subject: "Computer Science",
      teacher: "Prof. Anderson",
      time: "2 hours ago",
      rating: 4.5,
      ratingCount: 23,
      fileType: "PDF",
    },
    {
      id: 2,
      title: "Operating Systems - Deadlocks",
      subject: "Computer Science",
      teacher: "Dr. Santos",
      time: "1 day ago",
      rating: 4.8,
      ratingCount: 41,
      fileType: "PDF",
    },
  ];

  return (
    <div className="bookmarks-container">
      {/* HEADER */}
      <div className="top-header">
        <h1>Bookmarks</h1>
        <p>Pinned important materials from the community</p>
      </div>

      {/* STATS CARDS */}
      <div className="stats-row">
        <div className="stats-card">
          <span className="stat-icon reviews"></span>
          <div>
            <h2>5</h2>
            <p>Reviews Written</p>
          </div>
        </div>

        <div className="stats-card">
          <span className="stat-icon folders"></span>
          <div>
            <h2>5</h2>
            <p>Folders</p>
          </div>
        </div>

        <div className="stats-card">
          <span className="stat-icon added"></span>
          <div>
            <h2>0</h2>
            <p>Added This Week</p>
          </div>
        </div>
      </div>

      {/* SEARCH BAR + FILTER */}
      <div className="search-filter-row">
        <input
          type="text"
          placeholder="Search reviews..."
          className="search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select className="subjects-dropdown">
          <option>All Subjects</option>
          <option>Computer Science</option>
          <option>Math</option>
          <option>Engineering</option>
        </select>

        <button className="my-bookmarks-btn">My Bookmarks</button>
      </div>

      {/* GRID */}
      <div className="cards-grid">
        {dummyData.map((item) => (
          <div className="bookmark-card" key={item.id}>
            <div className="bookmark-icon">🔖</div>
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>
                {item.subject} • {item.teacher}
              </p>

              <div className="card-meta">
                <span className="file-type">{item.fileType}</span>
                <span className="time">{item.time}</span>
                <span className="rating">
                  ⭐ {item.rating} ({item.ratingCount})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
