import { useState } from "react";

const ActualizarEstadoForma2 = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>ActualizarEstadoForma2</h2>
      <p>Valor: {value}</p>
      <button onClick={() => setToValue(value - 1)}>Decrementar</button>
    </div>
  );
};

export default ActualizarEstadoForma2;
