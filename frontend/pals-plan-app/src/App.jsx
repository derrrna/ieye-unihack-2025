import React from 'react';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import SuggestionPage from './pages/SuggestionPAge';
import AvailabilityPage from './pages/AvailabilityPage';
import LoginPage from './pages/LoginPage';
import CreationPage from './pages/CreationPage';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<CreationPage/>}/>
            <Route path="/dashboard/:hangoutId" element={<DashboardPage/>}/>
            <Route path="/dashboard/:hangoutId/login" element={<LoginPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
