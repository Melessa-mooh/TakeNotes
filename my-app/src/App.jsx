import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";
import ProfileSettings from "./pages/profileSettings";
import AccountSettings from "./pages/accountSettings";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/reviews" element={<Reviews />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/settings/profile" element={<ProfileSettings />} />
         <Route path="/settings/account" element={<AccountSettings />} />

      </Routes>
    </Router>
  );
}