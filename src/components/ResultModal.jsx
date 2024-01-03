import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        the target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        you stopped the timer with <strong>X seconds left</strong>
      </p>
      <form action="doalog">
        <button>close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
