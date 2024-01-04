import { useState, useRef } from "react";

const defName = "unknown entity";

export default function Player() {
  const [playerName, setPlayerName] = useState(defName);
  const nameRef = useRef();

  function updPlayerName() {
    setPlayerName(nameRef.current.value);
  }

  return (
    <section>
      <h2>Welcome {playerName}</h2>

      <form action="">
        <input type="text" ref={nameRef}/>
        <button type="submit" onClick={updPlayerName} >
          Submit
        </button>
      </form>
    </section>
  );
}
