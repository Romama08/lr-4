import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Profile from './pages/Profile';
import Organizers from './pages/Organizers'; 
import FeedbackForm from './pages/FeedbackForm'; 
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <div className="logo">OnlineTickets</div>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/organizers">Організатори</Link></li> 
            <li><Link to="/feedback">Відгуки</Link></li> 
            <li><Link to="/profile" className="profile-link">Мій профіль</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/feedback" element={<FeedbackForm />} /> 
      </Routes>

      <footer>
        <div className="footer-info">
          <p>м. Львів, вул. Степана Бандери, 12</p>
          <p>+38 (067) 123-45-67 | support@onlinetickets.ua</p>
        </div>
        <p className="copyright">&copy; 2026 OnlineTickets</p>
      </footer>
    </Router>
  );
}

export default App;