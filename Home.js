import React from 'react';
import '../styles/Home.css';
import image1 from '../assets/pic2.jpg'; // Import images for dynamic display
import image2 from '../assets/pic3.jpeg';
import image3 from '../assets/pic4.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Main Header with Rotating Images */}
      <header className="home-header">
        <div className="header-images">
          <img src={image1} alt="Skill Enhancement" className="header-image rotating-image" />
          <img src={image2} alt="Professional Growth" className="header-image rotating-image" />
          <img src={image3} alt="Communication Skills" className="header-image rotating-image" />
        </div>
        <div className="header-content">
          <h1>Welcome to Soft Skill Enhancement AI</h1>
          <p className="intro-text">
          Our website offers an interactive platform to build essential soft skills, focusing on vocabulary, speech, and pronunciation. Users progress through levels from beginner to advanced, with practical lessons and feedback. Assessments and personalized recommendations help track and guide improvement.
          </p>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="home-section why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul className="features-list">
          <li>Tailored Learning Paths that focus on your growth areas.</li>
          <li>Real-Time Feedback to refine pronunciation and clarity.</li>
          <li>Comprehensive Lessons for vocabulary, pronunciation, and real-life conversations.</li>
        </ul>
      </section>

      {/* Features Section with alternating images and text */}
      <section className="home-section features">
        <h2>Our Key Features</h2>
        <div className="feature-box alternating">
          <img src={image1} alt="Vocabulary Lessons" className="feature-image" />
          <div className="feature-text">
            <h3>Vocabulary Lessons</h3>
            <p>A strong vocabulary is essential for effective communication, allowing users to convey ideas clearly and precisely. In our application, vocabulary lessons focus on expanding users' word choices and understanding context, equipping them with the right words for every situation. Mastery of vocabulary enhances both spoken and written expression, fostering greater confidence.</p>
          </div>
        </div>
        <div className="feature-box alternating reverse">
          <img src={image2} alt="Speech Practice" className="feature-image" />
          <div className="feature-text">
            <h3>Speech Practice</h3>
            <p>Speech practice in our application is designed to build conversational skills, emphasizing natural flow and expression. Users engage in exercises that encourage confident, articulate speaking in both personal and professional settings. By practicing speech, users learn to maintain engaging discussions, respond thoughtfully, and express ideas clearly.</p>
          </div>
        </div>
        <div className="feature-box alternating">
          <img src={image3} alt="Pronunciation Guide" className="feature-image" />
          <div className="feature-text">
            <h3>Pronunciation Guide</h3>
            <p>Our pronunciation guides support users in achieving clarity by focusing on the accurate sounds and intonation of words. Proper pronunciation is crucial for being understood, and these lessons help users refine their accents and stress patterns. This foundation ensures that users’ speech is clear and impactful, reinforcing effective communication skills across diverse contexts.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-section call-to-action">
        <h2>Ready to Improve Your Communication Skills?</h2>
        <p>Start enhancing your soft skills today and open doors to new career opportunities.</p>
        <button className="cta-button">Join Now</button>
      </section>

      {/* Footer with Terms and Policies */}
      <footer className="home-footer">
        <div className="footer-section">
          <h3>Policies</h3>
          <ul>
            <li>Terms and Policies</li>
            <li>Privacy Policy</li>
            <li>Hyperlink Policy</li>
            <li>Website Policies</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Fees and User Charges</li>
            <li>Act, Rules and Policies</li>
            <li>Permit Fees and Period</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Need Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Frequently Asked Questions</li>
            <li>Raise a Concern</li>
          </ul>
        </div>
        <div className="footer-info">
          <p>Website by Ministry of Road Transport & Highways (MoRTH), Government of India. © 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
