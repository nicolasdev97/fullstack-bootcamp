import { useState } from "react";
import Note from "./Note";

const AppFormularios = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  const addNote = (event) => {
    console.log("Note added");
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    // setNotes(notes.concat(noteObject));
    setNotes([...notes, noteObject]);
    setNewNote("A new note...");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <h2>Notes</h2>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "important" : "all"}
      </button>
    </>
  );
};

export default AppFormularios;
