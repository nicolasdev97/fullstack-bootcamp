import "./App.css";
import Note from "./renderizar-coleccion-modulos/Note";
import AppEjercicio1 from "./ejercicio1/AppEjercicio1";
import Courses from "./ejercicio1/Courses";
import AppFormularios from "./formularios/AppFormularios";
import AppAgendaTelefonica from "./ejercicio2/AppAgendaTelefonica";

const App = ({ notes }) => {
  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <h1>Ejercicio 1</h1>
      <AppEjercicio1 courses={Courses} />
      <h1>Formularios</h1>
      <AppFormularios notes={notes} />
      <h1>Ejercicio 2</h1>
      <AppAgendaTelefonica />
    </div>
  );
};

export default App;
