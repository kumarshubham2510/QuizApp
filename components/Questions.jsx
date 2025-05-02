import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions";

export default function Questions({
  activeIndex,
  onSkipAnswer,
  answers,
  onSelect,
}) {
  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setUserAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setUserAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeIndex].answers[0] === answer,
      });
    }, 1000);
    setTimeout(() => {
      onSelect(userAnswer);
    }, 2000);
  }

  let answerState = "";

  if (userAnswer.selectedAnswer && userAnswer.isCorrect != null) {
    answerState = userAnswer.isCorrect ? "correct" : "wrong";
  } else if (userAnswer.selectedAnswer) {
    answerState = "selected";
  }

  return (
    <>
      <div id="question">
        <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
        <h2> {QUESTIONS[activeIndex].text} </h2>
      </div>

      <Answers
        answers={answers}
        selectedAnswer={userAnswer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}
