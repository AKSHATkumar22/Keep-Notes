import React from "react";

const Note = ({ id, text, editHandler, deleteHandler }) => {
  return (
    <div className="note">
      <div className="note-body">{text}</div>
      <div className="note_footer">
        <button className="note_save" onClick={() => deleteHandler(id, text)}>
          Delete
        </button>
        <button className="note_save" onClick={() => editHandler(id, text)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Note;
