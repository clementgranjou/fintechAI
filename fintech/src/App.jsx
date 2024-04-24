import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/HomePage.jsx';
import Chatbot from './pages/Chatbot';
import Account from './pages/Account.jsx';
import Login from './pages/LoginButton'

// Component
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
            <Navbar />
    </Router>
  );
}

export default App;