import React, { Component } from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import NoteBoard from "../NoteBoard/NoteBoard";
import HorizontalMenu from "../HorizontalMenu/HorizontalMenu";

import "./NotesBlock.css";

export default function NotesBlock(props) {
  return (
    <>
      <div className="notes-block-container">
        <SearchPanel />
        <HorizontalMenu />
        <NoteBoard todo={props.todos} />
      </div>
    </>
  );
}
