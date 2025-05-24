import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
import "./Notes.css";
import Note from "./Note";

const Notes = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);
  const [deleteToggle, setDeleteToggle] = useState(null);

  const editHandler = (id, text) => {
    setEditToggle(id);
    setInputText(text);
  };

  const deleteHandler = (id, text) => {
    setDeleteToggle(id);
    setInputText(text);
  };

  const saveHandler = () => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          ></Note>
        );
      })}
      <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}
        editHandler={editHandler}
      />
    </div>
  );
};

export default Notes;
