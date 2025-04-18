const Function = () => {
  const hello = (who) => {
    const handler = () => {
      console.log("Hello", who);
    };
    return handler;
  };
  return (
    <div>
      <h2>Funciones que devuelven funciones:</h2>
      <button onClick={hello("world")}>Imprime "world"</button>
      <br />
      <button onClick={hello("react")}>Imprime "react"</button>
      <br />
      <button onClick={hello("function")}>Imprime "function"</button>
    </div>
  );
};

export default Function;
