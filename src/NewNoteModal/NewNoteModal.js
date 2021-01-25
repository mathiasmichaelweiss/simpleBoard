import React from "react";

import "./NewNoteModal.css";

export default function NewNoteModal() {
  return (
    <>
      <div className="new-note-modal">
        <form action="#">
          <input type="text" placeholder="title" />
          <textarea
            type="textarea"
            placeholder="note text"
            rows="10"
            cols="12"
          ></textarea>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
