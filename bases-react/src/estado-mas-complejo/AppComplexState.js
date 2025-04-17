import { useState } from "react";
import History from "./History";
import Button from "./Button";

const AppComplexState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  //   const [clicks, setClisks] = useState({
  //     right: 0,
  //     left: 0,
  //   });

  const handleLeftClicks = () => {
    //Creando un objeto

    // const newClicks = {
    //   ...clicks,
    //   left: clicks.left + 1,
    // };

    //Más simple
    // const newClicks = { ...clicks, left: clicks.left + 1 };

    // setClisks(newClicks);

    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClicks = () => {
    //Creando un objeto

    // const newClicks = {
    //   ...clicks,
    //   right: clicks.right + 1,
    // };

    //Más simple
    // const newClicks = { ...clicks, right: clicks.right + 1 };

    // setClisks(newClicks);

    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      <h1>AppComplexState</h1>
      {left}
      <Button handleClick={handleLeftClicks} text="Left" />
      <Button handleClick={handleRightClicks} text="Right" />
      {right}
      <p>{allClicks.join(" ")}</p>
      <h2>History:</h2>
      <History allClicks={allClicks} />
    </div>
  );
};

export default AppComplexState;
