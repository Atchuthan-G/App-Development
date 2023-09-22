import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Dash2() {
  const username = useSelector((state) => state.user.username);

  const sidebarStyle = {
    backgroundColor: '#010a03',
    color: 'white',
    width: '250px',
    padding: '20px',
    height: '100vh',
    position: 'fixed', 
    top: '0', 
    left: '0', 
    backgroundImage: 'url(./assets/img/img.jpg)',
  };

  const contentStyle = {
    marginLeft: '250px', // Adjust margin to push content to the right of the sidebar
    padding: '20px',
    textAlign: 'center',
  };

  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: '', // Replace with your desired color value
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h1>Fitness Dashboard</h1>
        <p>Welcome, {username}!</p>
        {/* Add sidebar links and other content here */}
        <Link to="/dashboard" style={linkStyle}> Your fitness metrics
        </Link>      </div>

      {/* Top bar */}
      <div style={{ backgroundColor: 'blue', padding: '10px' }}>
        {/* Add top bar content here */}
      </div>

      {/* Content */}
      <div style={contentStyle}>
        <h2>Your Fitness Metrics</h2>
        <div className="fitness-metrics">
          <div className="metric">
            <h3>Daily Steps</h3>
            <p>10,000</p>
          </div>
          <div className="metric">
            <h3>Calories Burned</h3>
            <p>500 kcal</p>
          </div>
          <div className="metric">
            <h3>Distance Walked</h3>
            <p>5.0 km</p>
          </div>
          <div className="metric">
            <h3>Workout Duration</h3>
            <p>45 minutes</p>
          </div>
          <div className="metric">
            <h3>Heart Rate</h3>
            <p>120 bpm</p>
          </div>
        </div>
        {/* Additional fitness-related content */}
      </div>
    </div>
  );
}

export default Dash2;