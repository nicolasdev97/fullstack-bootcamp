const Function = () => {
  //De manera más compleja
  const hello = (who) => {
    const handler = () => {
      console.log("Hello", who);
    };
    return handler;
  };

  //De manera más simple
  const bye = (who) => () => console.log("Bye", who);

  return (
    <div>
      <h2>Funciones que devuelven funciones:</h2>
      <button onClick={hello("world")}>Hello "world"</button>
      <button onClick={hello("react")}>Hello "react"</button>
      <button onClick={hello("function")}>Hello "function"</button>
      <br />
      <button onClick={bye("world")}>Bye "world"</button>
      <button onClick={bye("react")}>Bye "react"</button>
      <button onClick={bye("function")}>Bye "function"</button>
    </div>
  );
};

export default Function;
