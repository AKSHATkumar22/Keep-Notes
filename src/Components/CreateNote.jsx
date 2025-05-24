import React from "react";

const CreateNote = ({ inputText, setInputText, saveHandler }) => {
  const char = 100;
  const charLimit = char - inputText.length;
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter Your Text"
        maxLength={100}
      ></textarea>
      <div className="note_footer">
        <span className="label">{charLimit} left</span>
        <button className="note_save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <footer>
        <span className="foot">
          copyright@2025. All Rights Reserved Akshat Kumar
        </span>
      </footer>
    </div>
  );
};

export default CreateNote;
