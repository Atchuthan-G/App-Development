// ProfilePage.jsx

import React from 'react';
import '../src/Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { logout } from './Redux/Action'; // Import the logout action

function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function
  const username = useSelector((state) => state.user.username);

  const handleLogout = () => {
    // Dispatch the logout action to clear the username
    dispatch(logout());

    // Redirect the user to the home page or login page
    navigate('/');
  };

  const handleEdit = () => {
    navigate('/EditProfilePage');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
      </div>
      <div className="profile-details">
        <div className="profile-avatar">
          <img
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/avatar_female_woman_person_people_white_tone_icon_159360.png"
            alt="User Avatar"
          />
        </div>
        <div className="user-info">
          <h2>{username}</h2>
         
        </div>
      </div>
      <div className="profile-description">
        
      </div>
      <div className="profile-actions">
        <button className="edit-profile-button" onClick={handleEdit}>
          Edit Profile
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
