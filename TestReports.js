import React, { useEffect, useState } from 'react';
import '../styles/TestReports.css';

const TestReports = () => {
  const [testReports, setTestReports] = useState([]);

  useEffect(() => {
    // Retrieve test reports from localStorage
    const reports = JSON.parse(localStorage.getItem('testReports')) || [];
    setTestReports(reports);
  }, []);

  return (
    <div className="test-reports-container">
      <h2>Test Reports</h2>
      {testReports.length === 0 ? (
        <p>No test reports available.</p>
      ) : (
        <table className="reports-table">
          <thead>
            <tr>
              <th>Test Type</th>
              <th>Correct Answers</th>
              <th>Total Questions</th>
              <th>Score (%)</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {testReports.map((report, index) => (
              <tr key={index}>
                <td>{report.type}</td>
                <td>{report.correctAnswers}</td>
                <td>{report.totalQuestions}</td>
                <td>{((report.correctAnswers / report.totalQuestions) * 100).toFixed(2)}%</td>
                <td>{report.date}</td>
                <td>{report.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TestReports;
