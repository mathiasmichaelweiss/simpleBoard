import React, { Component } from "react";

import "./HorizontalMenu.css";
import completed from "./HorizontalMenuIcons/completed.svg";
import newNote from "./HorizontalMenuIcons/newNote.svg";
import recentlyDeleted from "./HorizontalMenuIcons/recentlyDeleted.svg";
import sort from "./HorizontalMenuIcons/sort.svg";

export default class HorizontalMenu extends Component {
  render() {
    return (
      <>
        <div className="horison-menu">
          <div className="horison-menu-first-block">
            <div className="new-note">
              <img src={newNote} alt="new note image" />
              <p className="hor-menu-item-text">new note</p>
            </div>
            <div className="completed">
              <img src={completed} alt="completed image" />
              <p className="hor-menu-item-text">completed</p>
            </div>
            <div className="recently-deleted">
              <img src={recentlyDeleted} alt="recently deleted image" />
              <p className="hor-menu-item-text">Recently deleted</p>
            </div>
          </div>
          <div className="horison-menu-second-block">
            <div className="folders">Folders</div>
            <div className="folders">Home</div>
            <div className="folders">Calendar</div>
          </div>
          <div className="horison-menu-third-block">
            <div className="sort">
              <img src={sort} alt="sort image" />
              sort by
            </div>
          </div>
        </div>
      </>
    );
  }
}
