import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";

import "./NoteBoard.css";

export default function NoteBoard(props) {
  return (
    <>
      <div className="noteBoard-container">
        {props.todo.map((todo, index) => {
          return <NoteItem todo={todo} key={todo.id} index={index} />;
        })}
      </div>
    </>
  );
}
