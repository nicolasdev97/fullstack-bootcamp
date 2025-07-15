import "./App.css";
import Ejercicio1 from "./ejercicio1/Ejercicio1";
import Mensaje from "./Mensaje";
import AppStateComponent from "./estado-componente-controladores-eventos/AppStateComponent";
import AppComplexState from "./estado-mas-complejo/AppComplexState";
import Reset from "./resetear-valor-estado/Reset";
import Function from "./funcion-devuelve-funcion/Function";
import ControladoresEventosComponentesHijos from "./pasando-controladores-eventos-a-componentes-hijos/controladores-eventos-a-componentes-hijos";
import Ejercicio2 from "./ejercicio2/Ejercicio2";

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
        <AppStateComponent />
      </>
      {/* Estado más complejo */}
      <>
        <AppComplexState />
      </>
      {/* Resetear valor de estado */}
      <>
        <Reset />
      </>
      {/* Función que devuelve una función */}
      <>
        <Function />
      </>
      {/* Pasar controladores de eventos a componentes hijos */}
      <>
        <ControladoresEventosComponentesHijos />
      </>
      <h1>Ejercicio 2:</h1>
      <Ejercicio2 />
    </>
  );
};

export default App;
