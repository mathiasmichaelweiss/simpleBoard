import React, { Component } from "react";

import "./NoteItem.css";
import pin from "./NoteItemIcons/pin.svg";

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: false
    };
  }

  onCompleted() {
    this.setState(({ isCompleted }) => {
      return {
        isCompleted: !isCompleted
      };
    });
  }

  render() {
    const { todo, onDelete /* , onCompleted */ } = this.props;
    let classNames = "done_false";
    
    if (this.state.isCompleted) {
      classNames = "done_true";
    }

    return (
      <>
        <div className="note-item">
          <div className="pin">
            <img src={pin} />
          </div>
          <div className="functions">
            <div className="functions1">
              <div className="delete" onClick={onDelete} />
              <div className={classNames} onClick={() => this.onCompleted()} />
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
}
