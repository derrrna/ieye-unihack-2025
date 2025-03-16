import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import SuggestionPage from './pages/SuggestionPage';
import AvailabilityPage from './pages/AvailabilityPage';
import LoginPage from './pages/LoginPage';
import CreationPage from './pages/CreationPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreationPage />} />
        <Route path="/dashboard/:hangoutId" element={<DashboardPage />} />
        <Route path="/dashboard/:hangoutId/login" element={<LoginPage />} />
        <Route path="/dashboard/:hangoutId/availability" element={<AvailabilityPage />} />
        <Route path="/dashboard/:hangoutId/suggestion" element={<SuggestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
