import Answers from "./Answers";
// import Questions from "./Questions";
import QUESTIONS from "../questions";
import quizCompletedImg from "../src/assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

import { useState, useCallback, useRef } from "react";
import Questions from "./Questions";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswer.length : userAnswer.length - 1;

  const quizIsCompleted = userAnswer.length === QUESTIONS.length;
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswer((prev) => {
        return [...prev, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex]["answers"][0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        answers={QUESTIONS[activeQuestionIndex]["answers"]}
        questionText={QUESTIONS[activeQuestionIndex]["text"]}
        selectedAnswer={userAnswer[userAnswer.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
        handleSelectAnswer={handleSelectAnswer}
      />
    </main>
  );
}
