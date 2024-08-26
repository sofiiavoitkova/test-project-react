import React, { useState } from "react";

const useToggle = (defaultValue) => {
  const [isGood, setIsGood] = useState(defaultValue);

  const toggle = () => {
    setIsGood((state) => !state);
  };

  return [isGood, toggle];
};

const App = () => {
  const [isGood, toggle] = useToggle(false);

  return (
    <main>
      {isGood ? "Good" : "Baaaad"}
      <button onClick={toggle}>Toggle</button>
    </main>
  );
};

export default App;
