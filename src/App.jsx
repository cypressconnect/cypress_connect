import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import { supabase } from './supabase';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserPortal from './pages/UserPortal';
import BusinessPortal from './pages/BusinessPortal';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontWeight: 800, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 46 20 A 30 30 0 0 0 46 80 L 46 62 A 12 12 0 0 1 46 38 Z" fill="var(--secondary)"/>
            <path d="M 54 20 A 30 30 0 0 1 54 80 L 54 62 A 12 12 0 0 0 54 38 Z" fill="var(--primary)"/>
          </svg>
          <div>
            <span style={{ color: 'var(--secondary)' }}>Local</span>
            <span style={{ color: 'var(--primary)', marginLeft: '0.25rem' }}>Link</span>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link to="/user" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>For Customers</Link>
          <Link to="/business" style={{ fontWeight: 500, color: 'var(--text-muted)' }}>For Student Businesses</Link>
          
          {user ? (
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Logout</button>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-layout">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/user/*" element={<UserPortal />} />
              <Route path="/business/*" element={<BusinessPortal />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
