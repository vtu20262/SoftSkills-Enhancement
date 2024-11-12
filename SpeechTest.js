import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../styles/SpeechTest.css';

const SpeechTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();
  const sentences = [
    "Hello how are you?",
    "The quick brown fox jumps over the lazy dog.",
    "Open AI is a leader in artificial intelligence research.",
    "React makes building UIs easier and more interactive."
  ];
  const { transcript, resetTranscript } = useSpeechRecognition();

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/gi, '')
      .trim();
  };

  const checkAnswer = () => {
    const normalizedTranscript = normalizeText(transcript);
    const normalizedSentence = normalizeText(sentences[currentIndex]);

    if (normalizedTranscript === normalizedSentence) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleVerify = () => {
    checkAnswer();
  };

  const handleNext = () => {
    if (currentIndex < sentences.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetTranscript();
      setIsCorrect(null);
    } else {
      // Redirect to the dashboard page after the last question
      return <Navigate to="/dashboard" />;
    }
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetTranscript();
      setIsCorrect(null);
    }
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Browser does not support speech recognition.</div>;
  }

  return (
    <div className="speech-test-page">
      <div className="speech-test-header">
        <h2>Speaking Exercise</h2>
      </div>
      <div className="sentence-container">
        <p className="sentence-text">Please speak the following sentence:</p>
        <p className="sentence-to-speak">{sentences[currentIndex]}</p>
        <button className="start-button" onClick={SpeechRecognition.startListening}>Start Listening</button>
        <button className="stop-button" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
      <div className="transcript-container">
        <p className="transcript-label">Your transcript:</p>
        <p className="transcript">{transcript}</p>
      </div>
      <button className="verify-button" onClick={handleVerify}>Verify Answer</button>
      {isCorrect !== null && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect, try again.'}
        </div>
      )}
      <div className="navigation-buttons">
        <button className="previous-button" onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button className="next-button" onClick={handleNext} disabled={currentIndex === sentences.length - 1}>Next</button>
      </div>
      <div className="score-container">
        <p>Score: {score} / {sentences.length}</p>
      </div>
      <div className="back-to-dashboard-container">
        <button className="back-to-dashboard-button" onClick={handleGoToDashboard}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default SpeechTest;
