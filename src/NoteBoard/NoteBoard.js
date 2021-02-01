import React, { Component } from "react";
import NoteItem from "../NoteItem/NoteItem";

import "./NoteBoard.css";

export default class NoteBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onDelete, todos, onCompleted, isCompleted } = this.props;

    return (
      <>
        <div className="noteBoard-container">
          {todos.map(todo => {
            if (todo.id) {
              return (
                <NoteItem
                  todo={todo}
                  key={todo.id}
                  onDelete={() => onDelete(todo.id)}
                  onCompleted={() => onCompleted(todo.id)}
                  id={todo.id}
                  isCompleted={isCompleted}
                />
              );
            }
          })}
        </div>
      </>
    );
  }
}
