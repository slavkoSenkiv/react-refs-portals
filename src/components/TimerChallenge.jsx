export default function TimerChallenge({ level, timerTime }) {
  return (
    <section className="challenge">
      <h1>{level}</h1>
      <p>
        {timerTime} second{timerTime > 1 ? "s" : ""}
      </p>
      <button>Start Challenge</button>
      <p>timer inactive</p>
    </section>
  );
}
