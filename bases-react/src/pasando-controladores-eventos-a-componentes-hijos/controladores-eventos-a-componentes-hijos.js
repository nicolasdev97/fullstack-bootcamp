import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const ControladoresEventosComponentesHijos = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>Pasando controladores de eventos a componentes hijos:</h2>
      {value}
      <Button handleClick={() => setToValue(1000)} text="Set to thousand" />
      <Button handleClick={() => setToValue(0)} text="Reset" />
      <Button handleClick={() => setToValue(value + 1)} text="Increment" />
    </div>
  );
};

export default ControladoresEventosComponentesHijos;
