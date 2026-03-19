import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const DashboardHome = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1.5rem' }}>User Dashboard</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3>Submit a Lead</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Looking for a service? Submit your request.</p>
        <Link to="submit-lead" className="btn btn-primary" style={{ display: 'inline-block' }}>Submit Lead</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3>Topics</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Add yourself to topics or classes of interest.</p>
        <Link to="topics" className="btn btn-secondary" style={{ display: 'inline-block' }}>Explore Topics</Link>
      </div>
    </div>
  </div>
);

const SubmitLead = () => (
  <div className="animate-fade-in glass-panel" style={{ padding: '2rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>Submit a Lead</h2>
    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Fill out the details below. Businesses will contact you.</p>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Service Category</label>
        <select style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'white' }}>
          <option>Plumbing</option>
          <option>Tutoring</option>
          <option>Home Cleaning</option>
          <option>Personal Training</option>
        </select>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Description</label>
        <textarea rows={4} placeholder="Describe exactly what you need..." style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'white' }}></textarea>
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
      <div className="glass-panel" style={{ padding: '1.5rem', flex: '1 1 300px' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Yoga in the Park</h4>
        <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Express Interest</button>
      </div>
      <div className="glass-panel" style={{ padding: '1.5rem', flex: '1 1 300px' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Local Tech Meetup</h4>
        <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Express Interest</button>
      </div>
    </div>
  </div>
);

export default function UserPortal() {
  const { user } = useAuth();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', minHeight: '80vh' }}>
      <aside style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Dashboard</Link>
        <Link to="submit-lead" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Submit Lead</Link>
        <Link to="topics" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Topics</Link>
      </aside>
      <main style={{ flex: 1 }}>
        {!user && <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(244,63,94,0.1)', color: 'var(--accent)', borderRadius: '8px' }}>You are viewing this as a guest. Please login to save your submissions.</div>}
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="submit-lead" element={<SubmitLead />} />
          <Route path="topics" element={<Topics />} />
        </Routes>
      </main>
    </div>
  );
}
