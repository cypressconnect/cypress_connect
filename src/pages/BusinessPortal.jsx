import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const DashboardHome = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1.5rem' }}>Business Dashboard</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
        <h3>Find Customers</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Find people needing tutoring, food, or other services.</p>
        <Link to="buy-leads" className="btn btn-primary" style={{ display: 'inline-block' }}>Browse Requests</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
        <h3>Purchase Topics</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Sponsor or claim topics to build your audience.</p>
        <Link to="buy-topics" className="btn btn-secondary" style={{ display: 'inline-block' }}>View Topics</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--accent)' }}>
        <h3>Add Service</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Post a class or service for users to find.</p>
        <Link to="add-service" className="btn btn-secondary" style={{ display: 'inline-block' }}>Start Form</Link>
      </div>
    </div>
  </div>
);

const BuyLeads = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h2>Customer Requests</h2>
      <span style={{ padding: '0.5rem 1rem', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', borderRadius: '8px', fontWeight: 'bold' }}>Credit Balance: $150</span>
    </div>
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ marginBottom: '0.25rem' }}>Looking for AP Math Tutoring</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Submitted 2 hours ago &middot; High School</p>
      </div>
      <button className="btn btn-primary" onClick={() => alert('Lead purchased! Connection details sent to your email.')}>Buy Connect for $5</button>
    </div>
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ marginBottom: '0.25rem' }}>Want to buy 2 dozen custom cookies</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Submitted 10 mins ago &middot; Auto-verified</p>
      </div>
      <button className="btn btn-primary" onClick={() => alert('Lead purchased! Connection details sent to your email.')}>Buy Connect for $3</button>
    </div>
  </div>
);

const BuyTopics = () => (
  <div className="animate-fade-in">
    <h2 style={{ marginBottom: '1rem' }}>Topic Sponsorships</h2>
    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Target users interested in specific categories.</p>
    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
      <h3 style={{ marginBottom: '1rem' }}>Feature coming soon!</h3>
    </div>
  </div>
);

const AddService = () => (
  <div className="animate-fade-in glass-panel" style={{ padding: '2rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>Add Service or Class</h2>
    <form onSubmit={(e) => { e.preventDefault(); alert('Service successfully posted!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Title/Name</label>
        <input type="text" placeholder="e.g. AP Physics Tutoring" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Class Timings</label>
        <input type="text" placeholder="e.g. Saturdays 10AM - 12PM" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Location</label>
        <input type="text" placeholder="e.g. Community Center or Zoom" style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }} />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Description</label>
        <textarea rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-elevated)', color: 'var(--text-main)' }}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Post Service</button>
    </form>
  </div>
);

export default function BusinessPortal() {
  const { user } = useAuth();

  return (
    <div className="container" style={{ padding: '2rem 1.5rem', display: 'flex', gap: '2rem', minHeight: '80vh' }}>
      <aside style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Link to="" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Dashboard</Link>
        <Link to="buy-leads" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Find Customers</Link>
        <Link to="buy-topics" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Sponsorships</Link>
        <Link to="add-service" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Add Service/Class</Link>
      </aside>
      <main style={{ flex: 1 }}>
        {!user && <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(244,63,94,0.1)', color: 'var(--accent)', borderRadius: '8px' }}>Please login to complete business transactions.</div>}
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="buy-leads" element={<BuyLeads />} />
          <Route path="buy-topics" element={<BuyTopics />} />
          <Route path="add-service" element={<AddService />} />
        </Routes>
      </main>
    </div>
  );
}
