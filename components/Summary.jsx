import quizCompletedImg from "../src/assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  let skipped = 0;
  let correct = 0;
  let wrong = 0;

  userAnswers.map((answer, index) => {
    if (answer === null) {
      skipped += 1;
    } else if (answer === QUESTIONS[index].answers[0]) {
      correct += 1;
    } else {
      wrong += 1;
    }
  });

  let skippedAnswerShare = Math.round((skipped / userAnswers.length) * 100);
  let correctAnswerShare = Math.round((correct / userAnswers.length) * 100);
  let wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div id="summary">
      <img src={quizCompletedImg} />
      <h2>Quiz Completed </h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span children="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span children="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span children="text">Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={answer + index}>
              {" "}
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index]["text"]}</p>
              <p className={cssClasses}>{answer ? answer : "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
