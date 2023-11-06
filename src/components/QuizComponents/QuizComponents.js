import React, { useState, useEffect } from 'react';
import { QuizData } from '../Data/QuizData';
import axios from 'axios';


function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(60); // Set the initial timer value in seconds

  useEffect(() => {
    let timerInterval;

    // Start the countdown timer for each question
    if (timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    // When the timer reaches 0, move to the next question
    if (timer === 0) {
      clearInterval(timerInterval);
      changeQuestion(true);
    }
    
    // Clean up the interval on component unmount or when the question changes
    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, currentQuestion]);

  const changeQuestion = (isNext) => {
    updateScore();

    if (isNext) {
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
        setTimer(60); // Reset the timer for the next question (set initial timer value)
      } else 
      if (currentQuestion === QuizData.length - 1)
      {
        setShowResult(true);
      }
      axios.post('/api/save-quiz-result', {
        score: score,
      })
      .then(response => {
        console.log('Quiz result saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving quiz result:', error);
      });
    }
     else {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
        setClickedOption(0);
        setTimer(60); // Reset the timer for the previous question (set initial timer value)
      }
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setTimer(60); // Reset the timer when resetting the quiz
  };

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        <p>Time remaining: {timer} seconds</p> {/* Moved the timer display here */}
        {showResult ? (
          <div className="result-container">
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score} out of {QuizData.length}</p>
            <button onClick={resetAll}>Try Again</button>
          </div>
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              <ul className="options-list">
                {QuizData[currentQuestion].options.map((option, i) => (
                  <li
                    className={`option-btn ${clickedOption === i + 1 ? "checked" : ""}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    <span className="option-number">{i + 1}.</span> {option}
                  </li>
                ))}
              </ul>
            </div>
            <div className="button-container">
              <input
                type="button"
                value="Back"
                id="back-button"
                onClick={() => changeQuestion(false)}
              />
              <input
                type="button"
                value="Next"
                id="next-button"
                onClick={() => changeQuestion(true)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default QuizComponent;
