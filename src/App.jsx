import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge level="easy" timerTime={1} />
        <TimerChallenge level="peasy" timerTime={5} />
        <TimerChallenge level="medium" timerTime={10} />
        <TimerChallenge level="pro" timerTime={20} />
      </div>
    </>
  );
}

export default App;
