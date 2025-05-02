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

  let timer = 10000;

  if (userAnswer.selectedAnswer) {
    timer = 1000;
  }
  if (userAnswer.isCorrect != null) {
    timer = 2000;
  }

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
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeOut={userAnswer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
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
