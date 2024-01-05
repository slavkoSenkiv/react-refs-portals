import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { timeLeft, onReset },
  ref
) {
  const dialog = useRef();
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialog}>
      {timeLeft <=0 ? <h1>You lost</h1> : <h1>Your score: {score}</h1>}
      <p>time remaining: {(timeLeft / 1000).toFixed(2)}</p>
      <form action="dialog" onSubmit={onReset}>
        <button>reset</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
