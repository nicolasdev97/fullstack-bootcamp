import { useState } from "react";

const ActualizarEstadoForma1 = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => () => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>ActualizarEstadoForma1</h2>
      <p>Valor: {value}</p>
      <button onClick={setToValue(value + 1)}>Incrementar</button>
    </div>
  );
};

export default ActualizarEstadoForma1;
