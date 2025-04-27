import Answers from "./Answers";
// import Questions from "./Questions";
import QUESTIONS from "../questions";
import quizCompletedImg from "../src/assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

import { useState, useCallback } from "react";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  const quizIsCompleted = userAnswer.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null));

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompletedImg} />
        <h2>Quiz Completed </h2>
      </div>
    );
  }

  const shuffledAnswer = QUESTIONS[activeQuestionIndex]["answers"];

  shuffledAnswer.sort(() => Math.random() - 0.5);

  return (
    <main id="quiz">
      {/* <Questions text= /> */}
      {/* <Answers answerOptions={questions[answersIndex]["answers"]} /> */}
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2> {QUESTIONS[activeQuestionIndex]["text"]} </h2>
      </div>
      <ul id="answers">
        {shuffledAnswer.map((answer) => {
          return (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
