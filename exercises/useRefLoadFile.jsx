import React from "react";

function App() {
  const clickRef = React.useRef();
  function handleClick() {
    clickRef.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          data-testid="file-picker"
          type="file"
          accept="image/*"
          ref={clickRef}
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
