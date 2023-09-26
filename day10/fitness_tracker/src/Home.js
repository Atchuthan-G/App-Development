import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <nav>
          <ul className="header-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
          </ul>
        </nav>
        <h1>Welcome to Fitness Tracker</h1>
        <p>Your Personal Fitness Journey Starts Here</p>
      </header>

      <section className="features">
        <div className="feature">
          <i className="fas fa-dumbbell"></i>
          <h2>Track Your Workouts</h2>
          <p>Record your exercises, sets, reps, and more.</p>
        </div>

        <div className="feature">
          <i className="fas fa-chart-line"></i>
          <h2>Visualize Progress</h2>
          <p>See your fitness progress through charts and graphs.</p>
        </div>

        <div className="feature">
          <i className="fas fa-calendar-alt"></i>
          <h2>Plan Your Routine</h2>
          <p>Create and schedule workout plans with ease.</p>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <p>Join Fitness Tracker today and take control of your fitness journey.</p>
        <Link to="/signup">
          <button className="sign-button"> Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="sign-button"> Login</button>
        </Link>
      </section>

      <footer className="footer">
        <nav>
          <ul className="footer-nav">
            <li><Link to='About'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/Terms'>Terms and Conditions</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
