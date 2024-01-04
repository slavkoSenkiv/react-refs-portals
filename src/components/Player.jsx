import { useState, useRef } from "react";

export default function Player() {
  const defName = "unknown entity";
  const [playerName, setPlayerName] = useState(defName);
  const nameRef = useRef();

  function updPlayerName() {
    setPlayerName(nameRef.current.value);
    nameRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>

      <p>
        <input type="text" ref={nameRef} />
        <button type="submit" onClick={updPlayerName}>
          Submit
        </button>
      </p>
    </section>
  );
}
