import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleSubmitted() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={handleSubmitted}>Set Name</button>
      </p>
    </section>
  );
}
