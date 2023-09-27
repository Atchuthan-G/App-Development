// About.js

import React from 'react';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-container">
      <h1>About Fitness Tracker</h1>
      <p>
        Fitness Tracker is your go-to app for tracking and managing your
        fitness journey. Whether you're a seasoned athlete or just starting out,
        our app is designed to help you achieve your fitness goals.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower individuals to live healthier lives through
        better fitness and nutrition. We believe that fitness is not just a
        destination but a lifelong journey, and we're here to support you every
        step of the way.
      </p>

      <h2>Meet the Team</h2>
      <ul>
        <li>
          <strong>John Doe</strong> - Founder and CEO
        </li>
        <li>
          <strong>Jane Smith</strong> - Lead Developer
        </li>
        <li>
          <strong>Mary Johnson</strong> - Nutritionist
        </li>
      </ul>

    </div>
  );
}

export default About;
