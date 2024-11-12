// src/components/Feedback.js

import React from 'react';

const Feedback = ({ answers, questions }) => {
  return (
    <div className="feedback-container">
      <h3>Your Feedback:</h3>
      {questions.map((question, index) => (
        <div key={index} className="feedback-item">
          <p>{question.questionText}</p>
          <p>Your Answer: {question.options[answers[index]]}</p>
          {answers[index] === question.correctAnswer ? (
            <p className="correct">Correct!</p>
          ) : (
            <p className="incorrect">Incorrect! Correct Answer: {question.options[question.correctAnswer]}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feedback;
