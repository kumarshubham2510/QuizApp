import Answers from "./Answers";
import Questions from "./Questions";
import questions from "../questions";

import { useState } from "react";

export default function Quiz() {
  const [answersIndex, setAnswersIndex] = useState(0);

  return (
    <main id="quiz">
      <Questions text={questions[answersIndex]["text"]} />
      <Answers answerOptions={questions[answersIndex]["answers"]} />
    </main>
  );
}
