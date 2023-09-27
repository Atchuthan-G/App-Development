import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfilePage from './Profile';

function FitnessDashboard() {
  
  const username = useSelector((state) => state.user.username);

  
  const sidebarStyle = {
    backgroundColor: '#333',
    color: 'white',
    width: '250px',
    padding: '20px',
    height: '100vh', 
    position: 'fixed', 
    top: '0', 
    left: '0', 
  };

  const contentStyle = {
    marginLeft: '250px', 
    padding: '20px',
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <h1>Fitness Dashboard</h1>
        <p>Welcome, {username}!</p>
      <Link to="/dash2">Your fitness metrics</Link>
      </div>
    <div>
      <ProfilePage/>
    </div>
      
    </div>
  );
}

export default FitnessDashboard;