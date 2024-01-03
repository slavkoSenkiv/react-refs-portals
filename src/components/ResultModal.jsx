import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0; 
  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>{userLost ? "You lost" : "You won"}</h2>
      <p>
        the target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        you stopped the timer with <strong>{formatedRemainingTime} seconds left</strong>
      </p>
      <form action="doalog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
