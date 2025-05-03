import Answers from "./Answers";
// import Questions from "./Questions";
import QUESTIONS from "../questions";

import QuestionTimer from "./QuestionTimer";

import { useState, useCallback, useRef } from "react";
import Questions from "./Questions";
import Summary from "./Summary";

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
    return <Summary userAnswers={userAnswer} />;
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
