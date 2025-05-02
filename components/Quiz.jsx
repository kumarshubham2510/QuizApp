import Answers from "./Answers";
// import Questions from "./Questions";
import QUESTIONS from "../questions";
import quizCompletedImg from "../src/assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

import { useState, useCallback, useRef } from "react";
import Questions from "./Questions";

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

  return (
    <main id="quiz">
      {/* <Questions text= /> */}
      {/* <Answers answerOptions={questions[answersIndex]["answers"]} /> */}
      <Questions
        key={activeQuestionIndex}
        activeIndex={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex]["answers"]}
        onSkipAnswer={handleSkipAnswer}
        onSelect={handleSelectAnswer}
      />
    </main>
  );
}
