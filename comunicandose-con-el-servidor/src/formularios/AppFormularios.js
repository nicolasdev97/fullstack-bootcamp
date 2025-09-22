import { useState } from "react";
import Note from "./Note";

const AppFormularios = (props) => {
  const [notes, setNotes] = useState(props.notes);

  return (
    <>
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
};

export default AppFormularios;
