import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const DashboardHome = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1.5rem' }}>User Dashboard</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3>Browse Businesses</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Find and request services directly from student providers.</p>
        <Link to="/user/browse-businesses" className="btn btn-primary" style={{ display: 'inline-block' }}>Browse Directory</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3>Topics</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Add yourself to topics or classes of interest.</p>
        <Link to="/user/topics" className="btn btn-secondary" style={{ display: 'inline-block' }}>Explore Topics</Link>
      </div>
    </div>
  </div>
);

const BrowseBusinesses = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1rem' }}>Student Businesses</h2>
    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Find local student-run services and request them directly.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Sarah's AP Math Prep</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>Expert tutoring in Calculus and Stats.</p>
        <Link to="/user/submit-lead" className="btn btn-primary" style={{ width: '100%' }}>Request Service</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Varsity Car Wash</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>Weekend driveway car washing team.</p>
        <Link to="/user/submit-lead" className="btn btn-primary" style={{ width: '100%' }}>Request Service</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Fresh Baked Cookies</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>Custom orders for events and parties.</p>
        <Link to="/user/submit-lead" className="btn btn-primary" style={{ width: '100%' }}>Request Service</Link>
      </div>
    </div>
  </div>
);

const SubmitLead = () => (
  <div className="animate-fade-in glass-panel" style={{ padding: '2rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>Targeted Service Request</h2>
    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Fill out the details below. This specific business will be notified.</p>
    <p style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontWeight: '500' }}>Target Business: Auto-selected from directory</p>
    <form onSubmit={(e) => { e.preventDefault(); alert('Request successfully submitted! The provider has been notified.'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
        <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Phone Number</label>
        <input type="tel" placeholder="(123) 456-7890" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
        <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Service Category</label>
        <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }}>
          <option>Tutoring</option>
          <option>Food & Bake Sales</option>
          <option>Odd Jobs & Errands</option>
          <option>Event Tickets / Organization</option>
        </select>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Description</label>
        <textarea rows={4} placeholder="Describe exactly what you need..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit Request</button>
    </form>
  </div>
);

const Topics = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1rem' }}>Interested Topics</h2>
    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Join topic groups. Organizers will be notified of your interest.</p>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {[
        "Chess", 
        "Swimming", 
        "Math Tutoring", 
        "History Tutoring", 
        "Science Tutoring", 
        "Piano Lessons", 
        "Music Lessons", 
        "Sports"
      ].map((topic) => (
        <div key={topic} className="glass-panel" style={{ padding: '1.5rem', flex: '1 1 300px' }}>
          <h4 style={{ marginBottom: '0.5rem' }}>{topic}</h4>
          <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }} onClick={() => alert('Interest registered! You will be notified when classes open.')}>Express Interest</button>
        </div>
      ))}
    </div>
  </div>
);

export default function UserPortal() {
  const { user } = useAuth();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', minHeight: '80vh' }}>
      <aside style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="/user" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Dashboard</Link>
        <Link to="/user/browse-businesses" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Browse Businesses</Link>
        <Link to="/user/submit-lead" className="btn btn-secondary" style={{ display: 'none' }}>Request Service</Link>
        <Link to="/user/topics" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Topics</Link>
      </aside>
      <main style={{ flex: 1 }}>
        {!user && <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(244,63,94,0.1)', color: 'var(--accent)', borderRadius: '8px' }}>You are viewing this as a guest. Please login to save your submissions.</div>}
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="browse-businesses" element={<BrowseBusinesses />} />
          <Route path="submit-lead" element={<SubmitLead />} />
          <Route path="topics" element={<Topics />} />
        </Routes>
      </main>
    </div>
  );
}
