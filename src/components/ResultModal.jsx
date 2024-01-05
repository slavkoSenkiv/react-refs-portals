import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { timeLeft, onReset },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={dialog}>
      {timeLeft <=0 ? <h1>You lost</h1> : <h1>Your score: 10</h1>}
      <p>time remaining: {(timeLeft / 1000).toFixed(2)}</p>
      <form action="dialog" onSubmit={onReset}>
        <button>reset</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
