// src/pages/VocabularyLessons.js
import React from 'react';
import './Lesson.css'; 
import NavbarComponent from '../components/Navbar.js'; // Import Navbar
import Sidebar from '../components/Sidebar.js'; // Import Sidebar// Import the styles for lessons
import NavbarComponent from '../components/Navbar.js';

const VocabularyLessons = () => {
  return (
    <div className="lesson-container">
      <NavbarComponent /> {/* Add Navbar */}
      <Sidebar /> {/* Add Sidebar */}
      <h2>Vocabulary Lessons</h2>
      <ul>
        <li>
          <h3>Lesson 1: Introduction to Vocabulary</h3>
          <p>Learn the basics of vocabulary.</p>
          <button>Start Lesson</button>
        </li>
        <li>
          <h3>Lesson 2: Advanced Vocabulary</h3>
          <p>Expand your vocabulary with advanced words.</p>
          <button>Start Lesson</button>
        </li>
        <li>
          <h3>Lesson 3: Vocabulary Quizzes</h3>
          <p>Test your vocabulary knowledge.</p>
          <button>Start Lesson</button>
        </li>
      </ul>
    </div>
  );
};

export default VocabularyLessons;
