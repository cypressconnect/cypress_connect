import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-fade-in">
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center', background: 'radial-gradient(circle at top, rgba(99,102,241,0.1) 0%, transparent 50%)' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>
            Where Needs Meet <span className="gradient-text">Solutions</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Cypress Connect is the definitive marketplace connecting everyday people with the businesses ready to serve them.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/user" className="btn btn-primary">
              I'm a User <ArrowRight size={20} />
            </Link>
            <Link to="/business" className="btn btn-secondary">
              I'm a Business
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Users size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>For Users</h3>
              <p style={{ color: 'var(--text-muted)' }}>Submit service requests, explore local classes, and connect directly with professionals.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Briefcase size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>For Businesses</h3>
              <p style={{ color: 'var(--text-muted)' }}>Purchase highly qualified leads, sponsor local topics, and grow your service offerings.</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Zap size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Instant Connection</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our platform validates all leads and matches them instantly to interested providers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
