import "./App.css";
import Note from "./renderizar-coleccion-modulos/Note";
import AppEjercicio1 from "./ejercicio1/AppEjercicio1";
import Courses from "./ejercicio1/Courses";
import AppFormularios from "./formularios/AppFormularios";
import AppAgendaTelefonica from "./ejercicio2/AppAgendaTelefonica";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  console.log("render", notes.length, "notes");

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
