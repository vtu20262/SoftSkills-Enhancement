// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <nav>
          <ul className="sidebar-menu">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/vocabulary-lessons">Vocabulary Lessons</a></li>
            <li><a href="/speech-lessons">Speech Lessons</a></li>
            <li><a href="/pronunciation-lessons">Pronunciation Lessons</a></li>
            <li><a href="/practice-tests">Practice Tests</a></li>
            <li><a href="/speech-test">Speaking Practice</a></li>
            <li><a href="/test-reports">Test Reports</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
