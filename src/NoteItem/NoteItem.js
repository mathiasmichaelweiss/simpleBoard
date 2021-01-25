import React, { Component } from "react";

import "./NoteItem.css";
import pin from "./NoteItemIcons/pin.svg";

export default function NoteItem({ todo, index }) {
  return (
    <>
      <div className="note-item">
        <div className="pin">
          <img src={pin} />
        </div>
        <div className="functions">
          <div className="functions1">
            <div className="delete" />
            <div className="done" />
            <div className="change" />
          </div>
          <div className="functions2">
            <div className="settings" />
          </div>
        </div>
        <div className="note-title">{todo.title}</div>
        <div className="note-text-container">
          <p className="note-text">{todo.text}</p>
        </div>
      </div>
    </>
  );
}
