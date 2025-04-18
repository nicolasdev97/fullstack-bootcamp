import { useState } from "react";

const Reset = () => {
  const [valor, setValor] = useState(10);

  const handleReset = () => {
    setValor(0);
  };

  return (
    <div>
      <h2>Reset state value:</h2>
      <p>{valor}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Reset;
