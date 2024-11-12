// src/components/Dashboard.js
import React from 'react'; // Import React
import Sidebar from '../components/Sidebar.js'; 
import '../styles/Dashboard.css';  // Correct path to styles directory
import pic1 from '../assets/pic1.jpg';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-page">
        <div className="content">
          <h1>Welcome to Our Dashboard</h1>
          <p>
            Here, you’ll find all the resources and tools to guide you through enhancing your soft skills. 
            Track your progress, view insights, and stay updated on the latest lessons and assessments.
          </p>
          <img src={pic1} alt="Dashboard Illustration" className="dashboard-image" />
          
          <section className="section">
            <h2>Overview of Features</h2>
            <p>
              The Dashboard provides you with a comprehensive view of your learning path, helping you build essential communication skills. 
              Here’s what you can do:
            </p>
            <ul>
              <li><strong>Vocabulary Builder:</strong> Access interactive lessons to expand your word knowledge, organized by difficulty levels.</li>
              <li><strong>Speech Practice:</strong> Work on your pronunciation and fluency through guided lessons and real-time feedback.</li>
              <li><strong>Practice Tests:</strong> Test your progress with customized assessments and track areas for improvement.</li>
              <li><strong>Detailed Reports:</strong> Receive personalized feedback and insights into your strengths and areas to work on.</li>
              <li><strong>Customized Learning Path:</strong> Follow a learning journey tailored to your current level and goals.</li>
            </ul>
          </section>

          <section className="section">
            <h2>Getting Started</h2>
            <p>
              Start by selecting a skill area from the sidebar. You can track your recent activity, set learning milestones, 
              and access recommended resources to enhance your skill development.
            </p>
          </section>

          <section className="section">
            <h2>Stay Connected</h2>
            <p>
              Remember to check for updates and new modules that are frequently added to enrich your learning experience. 
              If you need any assistance, our support team is just a message away!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
