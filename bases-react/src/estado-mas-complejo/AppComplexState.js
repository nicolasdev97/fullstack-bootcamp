import { useState } from "react";

const AppComplexState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      <h1>AppComplexState</h1>
      {left}
      <button onClick={() => setLeft(left + 1)}>Left</button>
      <button onClick={() => setRight(right + 1)}>Right</button>
      {right}
    </div>
  );
};

export default AppComplexState;
