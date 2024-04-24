import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Assurez-vous que le chemin est correct

// Pages
import Home from './pages/HomePage.jsx';
import Chatbot from './pages/Chatbot';
import Account from './pages/Account.jsx';
import Login from './pages/LoginPage';

// Component
import Navbar from './components/Navbar.jsx';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Utilise AuthProvider ici pour englober tous les composants */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute element={Home} />} />
          <Route path="/Chatbot" element={<PrivateRoute element={Chatbot} />} />
          <Route path="/Account" element={<PrivateRoute element={Account} />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
