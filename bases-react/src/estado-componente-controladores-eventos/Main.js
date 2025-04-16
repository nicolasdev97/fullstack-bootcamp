import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Main = () => {
  const name = "Peter";
  const age = 10;

  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  //   setTimeout(() => setCounter(counter + 1), 1000);

  const increase = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decrease = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const reset = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Display counter={counter} />
      <Button onClick={increase} text="Plus" />
      <Button onClick={decrease} text="Minus" />
      <Button onClick={reset} text="Reset" />
    </div>
  );
};

export default Main;
