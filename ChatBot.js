import React, { useState } from 'react';
import '../styles/ChatBot.css';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  // Predefined responses for the chatbot
  // Predefined responses for the chatbot
const predefinedResponses = {
  "hello": "Hi there! How can I help you today?",
  "how are you": "I'm just a program, but I'm here to assist you!",
  "what is your name": "I'm your friendly chatbot!",
  "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "bye": "Goodbye! Have a great day!",
  "what can you do": "I can chat with you, tell you fun facts, or answer basic questions!",
  "thank you": "You're very welcome!",
  "help": "I'm here to chat with you and provide responses to your questions.",

  // Application-based questions and answers
  "how do i reset my password": "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions provided.",
  "how do i create an account": "To create an account, click on the 'Sign Up' button on the homepage and fill out the registration form.",
  "how do i update my profile": "To update your profile, go to your profile page and click on the 'Edit Profile' button.",
  "where can i find the user settings": "User settings can be accessed from the top-right menu under 'Settings'.",
  "how do i log out": "You can log out by clicking on the 'Logout' button in the top-right corner of the application.",
  "what features does this app have": "This app has a variety of features including user profile management, chat support, notifications, and more.",
  "can i change my username": "Unfortunately, usernames cannot be changed once set. You can contact support for further assistance.",
  "how do i contact support": "You can contact support by clicking on the 'Support' or 'Help' option in the main menu.",
  "how do i delete my account": "To delete your account, go to the account settings and look for the 'Delete Account' option. Make sure to read the conditions before proceeding.",
  "where can i see my activity log": "Your activity log can be found under 'Account Settings' in the 'Activity Log' section.",
  "how do i enable notifications": "Go to the settings and navigate to 'Notifications'. Toggle the switch to enable or disable notifications as needed.",
  "is there a mobile app available": "Yes, a mobile app version is available for both iOS and Android. Check the app store for more details.",
  "how do i change my password": "Navigate to your account settings and select 'Change Password'. Enter your current password followed by your new password.",
  "how can i save my progress": "Your progress is saved automatically as you use the app. Ensure you are logged in for data to be synced.",
  
  // Default response
  "default": "I'm not sure how to respond to that, but I'm here to learn!"
};


  // Toggle chat visibility
  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  // Handle sending the user's message and chatbot response
  const handleSendMessage = () => {
    if (!userMessage.trim()) return; // Prevent empty messages

    const newUserMessage = { role: 'user', content: userMessage.trim() };
    setMessages((prev) => [...prev, newUserMessage]);
    setUserMessage(''); // Clear input field

    // Simulate chatbot response based on predefined responses
    const userMessageLower = userMessage.trim().toLowerCase();
    const botResponse = predefinedResponses[userMessageLower] || predefinedResponses["default"];

    const newBotMessage = { role: 'bot', content: botResponse };
    setMessages((prev) => [...prev, newBotMessage]);
  };

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-button" onClick={toggleChat}>
        {isChatOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {/* Chatbot Container */}
      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>Chatbot</h4>
          </div>
          <div className="chatbot-messages">
            {/* Render the chat messages */}
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.role}`}>
                <strong>{msg.role === 'user' ? 'You: ' : 'Bot: '}</strong>
                <p>{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
