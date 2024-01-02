import React from 'react';
 
export const userData = {
  name: '',
  email: '',
};
 
export default function App() {
  const nameRef = React.useRef();
  const mailRef = React.useRef();
 
  function handleSaveData() {
    const enteredName = nameRef.current.value;
    const enteredEmail = mailRef.current.value;
 
    userData.name = enteredName;
    userData.email = enteredEmail;
 
    console.log(userData);
  }
 
  return (
    <div id="app">
      <Input type="text" label="Your Name" ref={nameRef} />
      <Input type="email" label="Your E-Mail" ref={mailRef} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}

const Input = React.forwardRef(function Input( {label, ...props}, ref) {
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...props}/>
    </p>
  );
});

