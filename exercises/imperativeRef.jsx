import React from "react";
import Form from "./Form";

export function App() {
  const formFieldsRef = React.useRef();

  function handleRestart() {
    formFieldsRef.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formFieldsRef} />
    </div>
  );
}


const Form = React.forwardRef(function Form(props, ref) {
  const formRef = React.useRef();

  React.useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current.reset();
      },
    };
  });

  return (
    <form ref={formRef}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});

