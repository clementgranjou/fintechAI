import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext'; // Assurez-vous que le chemin est correct

// Pages
import Home from './pages/HomePage.jsx';
import Chatbot from './pages/Chatbot';
import Account from './pages/Account.jsx';
import Dashboard from './pages/Dashboard.jsx';
// import Login from './pages/LoginPage';

// Component
import Navbar from './components/Navbar.jsx';
// import PrivateRoute from './components/PrivateRoute';




function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chatbot" element={<Chatbot />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />


          {/* <Route path="/Login" element={<Login />} /> */}
        </Routes>
        <Navbar />
    </Router>
  );
}

export default App;



// function App() {
//   return (
//     <Router>
//       <AuthProvider> 
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<PrivateRoute element={Home} />} />
//           <Route path="/Chatbot" element={<PrivateRoute element={Chatbot} />} />
//           <Route path="/Account" element={<PrivateRoute element={Account} />} />
//           <Route path="/Login" element={<Login />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;