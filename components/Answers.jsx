import Options from "./Options";
import { useCallback, useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answers];

    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = answer === selectedAnswer;

        let cssClass = "";

        if (isSelected && answerState === "answered") {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              disabled={answerState != ""}
              onClick={() => {
                onSelect(answer);
              }}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
