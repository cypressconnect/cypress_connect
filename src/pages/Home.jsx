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
            Cypress Connect is the definitive marketplace connecting everyday people with the high school student businesses ready to serve them.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/user" className="btn btn-primary">
              I'm a Customer <ArrowRight size={20} />
            </Link>
            <Link to="/business" className="btn btn-secondary">
              I'm a Student Business
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Users size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>For Customers</h3>
              <p style={{ color: 'var(--text-muted)' }}>Submit service requests, explore local classes, and support student entrepreneurs.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Briefcase size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>For Student Businesses</h3>
              <p style={{ color: 'var(--text-muted)' }}>Find people needing tutors, bake sales, odd jobs, and grow your student business.</p>
            </div>

            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
              <Zap size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ marginBottom: '1rem' }}>Instant Connection</h3>
              <p style={{ color: 'var(--text-muted)' }}>Our platform validates all leads and matches them instantly to interested providers.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 1.5rem', background: 'var(--bg-base)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>How It Works</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', borderTop: '4px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <Users size={32} color="var(--primary)" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.75rem' }}>How Leads Work</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Customer Submits Request</strong>
                    <span style={{ color: 'var(--text-muted)' }}>Users browse local businesses and fill out a specific request for a service they need.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Business is Notified</strong>
                    <span style={{ color: 'var(--text-muted)' }}>The student business receives an instant alert that a customer wants their specific service.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--primary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Connect & Deliver</strong>
                    <span style={{ color: 'var(--text-muted)' }}>The business unlocks the lead using their credits and contacts the customer to finalize details.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-panel" style={{ padding: '2.5rem', borderTop: '4px solid var(--secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <Briefcase size={32} color="var(--secondary)" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.75rem' }}>How Topics Work</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--secondary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Users Show Interest</strong>
                    <span style={{ color: 'var(--text-muted)' }}>Customers looking for general services (like "Math Tutoring") add themselves to a Topic.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--secondary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Businesses Subscribe</strong>
                    <span style={{ color: 'var(--text-muted)' }}>Providers sponsor or subscribe to topics relevant to the services they offer.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ background: 'var(--secondary)', color: 'white', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</span>
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Instant Access</strong>
                    <span style={{ color: 'var(--text-muted)' }}>Subscribed businesses get instant, direct access to the contact info of everyone in that topic.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
