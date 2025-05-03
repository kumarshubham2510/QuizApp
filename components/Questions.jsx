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
  const [answer, setanswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect != null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setanswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setanswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[activeIndex].answers[0] === answer,
      });
    }, 1000);
    setTimeout(() => {
      onSelect(answer);
    }, 2000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect != null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "selected";
  }

  return (
    <>
      <div id="question">
        <QuestionTimer
          key={timer}
          timeout={timer}
          onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
          mode={answerState}
        />
        <h2> {QUESTIONS[activeIndex].text} </h2>
      </div>

      <Answers
        answers={answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}
