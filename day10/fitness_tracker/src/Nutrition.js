import React from 'react';
import './Nutrition.css'; // Import your CSS file

function Nutrition() {
  return (
    <div className="nutrition-container">
      <h1>Nutrition Tracker</h1>
      <p>
        Welcome to the Nutrition Tracker page! Proper nutrition is a crucial
        component of your fitness journey. Here, you can learn about the
        importance of a balanced diet, track your daily calorie intake, and
        discover valuable tips on healthy eating.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Track your daily calorie consumption.</li>
        <li>Discover nutritious recipes and meal plans.</li>
        <li>Get personalized dietary recommendations based on your fitness goals.</li>
      </ul>

      <h2>Tips for Healthy Eating</h2>
      <p>
        Maintaining a balanced diet is essential for achieving your fitness
        goals. Here are some tips to help you make healthier food choices:
      </p>
      <ul>
        <li>Eat a variety of fruits and vegetables.</li>
        <li>Include lean proteins in your meals.</li>
        <li>Limit your intake of processed foods and added sugars.</li>
        <li>Stay hydrated by drinking plenty of water.</li>
      </ul>

      {/* Add more nutritional content as needed */}
    </div>
  );
}

export default Nutrition;
