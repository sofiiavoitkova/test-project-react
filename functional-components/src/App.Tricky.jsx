import React, { useState } from "react";

const ComponentWithInnerState = ({ counter }) => {
  const [state, setState] = useState(counter);
  return (
    <div>
      <h2>Inner Counter : {state}</h2>
      <button type="button" onClick={() => setState(state + 1)}>
        Increment
      </button>
    </div>
  );
};

const App = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>App Counter : {state}</h1>
      <div>
        <button type="button" onClick={() => setState(state + 1)}>
          Increment
        </button>
      </div>
      <ComponentWithInnerState counter={state} />
    </div>
  );
};

export default App;
