import React, { useEffect, useState } from 'react';
import axios from 'axios';

function QuizHistory() {
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => {
    // Fetch quiz history data from the API
    async function fetchQuizHistory() {
      try {
        const response = await axios.get('/api/quiz-history'); // Adjust the API endpoint
        setQuizHistory(response.data);
      } catch (error) {
        console.error('Error fetching quiz history:', error);
      }
    }

    fetchQuizHistory();
  }, []);
  
  return (
    <div>
      <h2>Quiz History</h2>
      <ul>
        {quizHistory.map((historyItem, index) => (
          <li key={index}>
            <p>Quiz ID: {historyItem.quizId}</p>
            <p>Score: {historyItem.score}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizHistory;
