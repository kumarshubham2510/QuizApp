import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    // console.log("setTimeout");

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timeout]);

  useEffect(() => {
    // console.log("setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
