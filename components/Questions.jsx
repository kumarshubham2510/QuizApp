export default function Questions({ text }) {
  return (
    <div id="question">
      <progress value="30" max="100"></progress>
      <h2> {text} </h2>
    </div>
  );
}
