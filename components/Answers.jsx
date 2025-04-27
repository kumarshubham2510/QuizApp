import Options from "./Options";

export default function Answers({ answerOptions }) {
  return (
    <ul id="answers">
      <Options text={answerOptions[0]} />
      <Options text={answerOptions[1]} />
      <Options text={answerOptions[2]} />
      <Options text={answerOptions[3]} />
    </ul>
  );
}
