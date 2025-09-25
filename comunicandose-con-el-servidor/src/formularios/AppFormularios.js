import { useState, useEffect } from "react";
import Note from "./Note";
import axios from "axios";

const AppFormularios = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("A new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    // console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      // console.log("promise fulfilled");
      setNotes(response.data);
    });
  }, []);
  // console.log("render", notes.length, "notes");

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    axios.put(url, changedNote).then((response) => {
      setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    });
  };

  const addNote = (event) => {
    // console.log("Note added");
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    axios.post("http://localhost:3001/notes", noteObject).then((response) => {
      setNotes([...notes, noteObject]);
      setNewNote("A new note...");
    });
    // setNotes(notes.concat(noteObject));
  };

  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <>
      <h2>Notes</h2>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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
