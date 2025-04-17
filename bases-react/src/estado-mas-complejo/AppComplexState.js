import { useState } from "react";

const AppComplexState = () => {
  //   const [left, setLeft] = useState(0);
  //   const [right, setRight] = useState(0);
  const [clicks, setClisks] = useState({
    right: 0,
    left: 0,
  });

  const handleLeftClicks = () => {
    //Creando un objeto

    // const newClicks = {
    //   ...clicks,
    //   left: clicks.left + 1,
    // };

    //Más simple
    const newClicks = { ...clicks, left: clicks.left + 1 };

    setClisks(newClicks);
  };

  const handleRightClicks = () => {
    //Creando un objeto

    // const newClicks = {
    //   ...clicks,
    //   right: clicks.right + 1,
    // };

    //Más simple
    const newClicks = { ...clicks, right: clicks.right + 1 };

    setClisks(newClicks);
  };

  return (
    <div>
      <h1>AppComplexState</h1>
      {clicks.left}
      <button onClick={handleLeftClicks}>Left</button>
      <button onClick={handleRightClicks}>Right</button>
      {clicks.right}
    </div>
  );
};

export default AppComplexState;
