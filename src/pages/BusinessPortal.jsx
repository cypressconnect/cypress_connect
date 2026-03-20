import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const DashboardHome = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
      <h2>Business Dashboard</h2>
      <div style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
        2 New Notifications
      </div>
    </div>

    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
      <h4 style={{ marginBottom: '0.5rem' }}>Notification Center</h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)' }}>
        <li style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>🔔 You received a new targeted request for <strong>AP Math Tutoring</strong>!</li>
        <li style={{ padding: '0.5rem 0' }}>🔔 You received a new targeted request for <strong>Custom Cookies</strong>!</li>
      </ul>
      <Link to="/business/buy-leads" style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--primary)', fontWeight: '500' }}>View Requests &rarr;</Link>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--primary)' }}>
        <h3>Find Customers</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Find people needing tutoring, food, or other services.</p>
        <Link to="/business/buy-leads" className="btn btn-primary" style={{ display: 'inline-block' }}>Browse Requests</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--secondary)' }}>
        <h3>Purchase Topics</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Sponsor or claim topics to build your audience.</p>
        <Link to="/business/buy-topics" className="btn btn-secondary" style={{ display: 'inline-block' }}>View Topics</Link>
      </div>
      <div className="glass-panel" style={{ padding: '2rem', borderTop: '4px solid var(--accent)' }}>
        <h3>Add Service</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Post a class or service for users to find.</p>
        <Link to="/business/add-service" className="btn btn-secondary" style={{ display: 'inline-block' }}>Start Form</Link>
      </div>
    </div>
  </div>
);

const LeadCard = ({ title, time, price, name, phone, email }) => {
  const [purchased, setPurchased] = React.useState(false);
  
  return (
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h4 style={{ marginBottom: '0.25rem' }}>{title}</h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{time}</p>
        <div style={{ background: 'var(--bg-elevated)', padding: '1rem', borderRadius: '8px', fontSize: '0.875rem', color: 'var(--text-main)', display: 'inline-block' }}>
          {purchased ? (
            <>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Email:</strong> {email}</p>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {name.charAt(0)}*** {name.split(' ')[1]?.charAt(0)}***</p>
              <p><strong>Phone:</strong> (***) ***-****</p>
              <p><strong>Email:</strong> {email.charAt(0)}***@***.com</p>
            </>
          )}
        </div>
      </div>
      <div>
        {!purchased ? (
          <button className="btn btn-primary" onClick={() => setPurchased(true)}>
            {price === "0" || price === 0 ? "Unlock Contact (Included)" : `Buy Connect for $${price}`}
          </button>
        ) : (
          <button className="btn btn-secondary" disabled style={{ opacity: 0.8 }}>Contact Unlocked</button>
        )}
      </div>
    </div>
  );
};

const BuyLeads = () => (
  <div className="animate-fade-in">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
      <h2>Customer Requests</h2>
      <span style={{ padding: '0.5rem 1rem', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', borderRadius: '8px', fontWeight: 'bold' }}>Credit Balance: $150</span>
    </div>
    <LeadCard title="Looking for AP Math Tutoring" time="Submitted 2 hours ago &middot; High School" price="5" name="John Smith" phone="(555) 123-4567" email="john@example.com" />
    <LeadCard title="Want to buy 2 dozen custom cookies" time="Submitted 10 mins ago &middot; Auto-verified" price="3" name="Sarah Jenkins" phone="(555) 987-6543" email="sarah@example.com" />
  </div>
);

const BuyTopics = () => {
  const [subscribedTopics, setSubscribedTopics] = React.useState([]);
  const [viewingTopic, setViewingTopic] = React.useState(null);

  const toggleSubscription = (topic) => {
    if (subscribedTopics.includes(topic)) {
      setSubscribedTopics(subscribedTopics.filter(t => t !== topic));
      if (viewingTopic === topic) setViewingTopic(null);
    } else {
      setSubscribedTopics([...subscribedTopics, topic]);
    }
  };

  if (viewingTopic) {
    return (
      <div className="animate-fade-in">
        <button className="btn btn-secondary" style={{ marginBottom: '1.5rem', padding: '0.5rem 1rem' }} onClick={() => setViewingTopic(null)}>&larr; Back to Topics</button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2>{viewingTopic} Users</h2>
          <span style={{ padding: '0.5rem 1rem', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)', borderRadius: '8px', fontWeight: 'bold' }}>Subscribed Access</span>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Users who have joined the {viewingTopic} topic looking for services:</p>
        <LeadCard title={`Looking for ${viewingTopic} Teacher/Provider`} time="Joined 1 hour ago" price="0" name="Alice Walker" phone="(555) 234-5678" email="alice@example.com" />
        <LeadCard title={`Needs ${viewingTopic} ASAP`} time="Joined yesterday" price="0" name="Bob Johnson" phone="(555) 345-6789" email="bob@example.com" />
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 style={{ marginBottom: '1rem' }}>Topic Sponsorships</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Target users interested in specific categories. Subscribe to a topic to instantly unlock access to users who added their info to that topic.</p>
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
        ].map((topic) => {
          const isSubscribed = subscribedTopics.includes(topic);
          return (
            <div key={topic} className="glass-panel" style={{ padding: '1.5rem', flex: '1 1 300px', borderTop: isSubscribed ? '4px solid var(--primary)' : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h4 style={{ margin: 0 }}>{topic}</h4>
                {isSubscribed && <span style={{ fontSize: '0.75rem', background: 'var(--primary)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>Subscribed</span>}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1rem' }}>{isSubscribed ? 'You now have access to users in this topic.' : 'Subscribe to see potential customers looking for this service.'}</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className={isSubscribed ? "btn btn-secondary" : "btn btn-primary"} 
                  style={{ padding: '0.5rem 1rem', flex: 1 }} 
                  onClick={() => toggleSubscription(topic)}
                >
                  {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
                </button>
                {isSubscribed && (
                  <button 
                    className="btn btn-primary" 
                    style={{ padding: '0.5rem 1rem', flex: 1 }}
                    onClick={() => setViewingTopic(topic)}
                  >
                    View Users
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
        <Link to="/business" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Dashboard</Link>
        <Link to="/business/buy-leads" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Find Customers</Link>
        <Link to="/business/buy-topics" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Sponsorships</Link>
        <Link to="/business/add-service" className="btn btn-secondary" style={{ justifyContent: 'flex-start' }}>Add Service/Class</Link>
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
