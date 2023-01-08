import React from "react";
import "./Quiz.css";
import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      questionText: "What is not a programming language?",
      answerOptions: [
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "HTML", isCorrect: true },
        { answerText: "GoLang", isCorrect: false },
        { answerText: "Python", isCorrect: false },
      ],
    },
    {
      questionText: "How many types of components are there in React??",
      answerOptions: [
        { answerText: "4", isCorrect: false },
        { answerText: "1", isCorrect: false },
        { answerText: "0", isCorrect: false },
        { answerText: "2", isCorrect: true },
      ],
    },
    {
      questionText: "What is  props?",
      answerOptions: [
        { answerText: "Function", inCorrect: false },
        { answerText: "Object", inCorrect: true },
        { answerText: "Framework", inCorrect: false },
        { answerText: "React Element", inCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a React library??",
      answerOptions: [
        { answerText: "Java Script", isCorrect: false },
        { answerText: "Vue.js", isCorrect: false },
        { answerText: "Node JS", isCorrect: false },
        { answerText: "Redux", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentquestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentquestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const refresh = () => {
    setCurrentquestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="section_score">
          <div>
            correct answers {score + 1} / {questions.length}
          </div>
          <button onClick={refresh} className="refresh_btn">
            Try again
          </button>
        </div>
      ) : (
        <div className="quiz">
          <div className="question_section">
            <div className="question_count">
              <span>Question {currentQuestion + 1}</span> /{questions.length}
            </div>
            <div className="question_text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer_question">
            {questions[currentQuestion].answerOptions.map((post) => (
              <button onClick={() => handleAnswerOptionClick(post.isCorrect)}>
                {post.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
