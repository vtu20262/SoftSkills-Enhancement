import React, { useEffect, useState } from 'react';

const Recommendations = ({ userProgress }) => {
  const [recommendations, setRecommendations] = useState("");
  const [loading, setLoading] = useState(false);

  // Extract incorrect answers to determine topics to improve
  const getIncorrectAnswers = () => {
    const incorrectAnswers = [];
    userProgress.userAnswers.forEach((answer, index) => {
      if (answer !== userProgress.correctAnswers[index]) {
        incorrectAnswers.push(userProgress.questions[index].topic);
      }
    });
    return [...new Set(incorrectAnswers)]; // Remove duplicates
  };

  // Function to fetch recommendations from OpenAI API
  const fetchRecommendations = async () => {
    const incorrectTopics = getIncorrectAnswers(); // Get topics where answers were wrong
  
    if (incorrectTopics.length === 0) {
      setRecommendations("Great job! No topics to improve.");
      return;
    }
  
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:5000/recommendations', { // Ensure this matches your server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ incorrectTopics }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch recommendations from server');
      }
  
      const data = await response.json();
      if (data.recommendations) {
        setRecommendations(data.recommendations);
      } else {
        setRecommendations("No recommendations found.");
      }
    } catch (error) {
      console.error('Error fetching recommendations from server:', error);
      setRecommendations("Failed to fetch recommendations. Please try again later.");
    }
  
    setLoading(false);
  };
  
  

  useEffect(() => {
    if (userProgress.userAnswers && userProgress.correctAnswers) {
      fetchRecommendations();  // Fetch recommendations after the test
    }
  }, [userProgress]);

  return (
    <div className="recommendations-container">
      <h3>Improvement Recommendations:</h3>
      {loading ? (
        <p>Loading recommendations...</p>
      ) : (
        <p>{recommendations || "We couldn't fetch any recommendations at this moment."}</p>
      )}
    </div>
  );
};

export default Recommendations;
