import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({ level, timerTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(timerTime * 1000);

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const timerIsActive = timeRemaining > 0 && timeRemaining < timerTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function handleReset() {
    setTimeRemaining(timerTime * 1000);
  }

  return (
    <>
      <ResultModal
        timeLeft={timeRemaining}
        targetTime={targetTime}
        ref={dialog}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{level}</h2>
        <p className="challenge-time">
          {timerTime} second{timerTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive && "active"}>
          {timerIsActive ? "timer is active" : "timer inactive"}
        </p>
      </section>
    </>
  );
}
