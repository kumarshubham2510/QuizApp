import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Questions({
  questionText,
  selectedAnswer,
  answerState,
  onSkipAnswer,
  answers,
  handleSelectAnswer,
}) {
  return (
    <>
      <div id="question">
        <QuestionTimer timeout={10000} onTimeOut={onSkipAnswer} />
        <h2> {questionText} </h2>
      </div>

      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </>
  );
}
