import "./App.css";
import Ejercicio1 from "./ejercicio1/Ejercicio1";
import Mensaje from "./Mensaje";
import Main from "./estado-componente-controladores-eventos/Main";

const App = () => {
  const friends = [
    { name: "Peter", age: 4 },
    { name: "Maya", age: 10 },
  ];

  const friends2 = ["Peter", "Maya"];

  return (
    <>
      {/* Bases de React */}
      <>
        <Mensaje color="red" message="Estamos trabajando" />
        <Mensaje color="blue" message="En un curso" />
        <Mensaje color="yellow" message="De React" />
        <div>
          <p>
            {friends[0].name} {friends[0].age}
          </p>
          <p>
            {friends[1].name} {friends[1].age}
          </p>
          <p>{friends2[0]}</p>
        </div>
        <h1>Ejercicio 1:</h1>
        <Ejercicio1 />
      </>
      {/* Estado del componente y controladores de eventos */}
      <>
        <Main />
      </>
    </>
  );
};

export default App;
