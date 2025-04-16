import { useState } from "react";

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

  //   setTimeout(() => setCounter(counter + 1), 1000);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  console.log("rendering...", counter);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <div>{counter}</div>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
      <button onClick={reset}>Zero</button>
    </div>
  );
};

export default Main;
