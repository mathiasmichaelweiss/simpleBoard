import React, { Component } from "react";
import NewNoteModal from "../NewNoteModal/NewNoteModal";

import "./HorizontalMenu.css";
import completed from "./HorizontalMenuIcons/completed.svg";
import newNote from "./HorizontalMenuIcons/newNote.svg";
import recentlyDeleted from "./HorizontalMenuIcons/recentlyDeleted.svg";
import sort from "./HorizontalMenuIcons/sort.svg";

export default class HorizontalMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpened: true
    });
  }

  closeModal() {
    this.setState({
      isModalOpened: false
    });
  }

  render() {
    const { onEnterCloseModal, addItem, isHomePage, openHomePage } = this.props;
    let homeClass = "folders";
    if (isHomePage) {
      homeClass = "folders_active";
    } else {
      homeClass = "folders";
    }

    return (
      <>
        <div className="horison-menu">
          <div className="horison-menu-first-block">
            <div className="new-note" onClick={() => this.openModal()}>
              <img src={newNote} alt="new note image" />
              <p className="hor-menu-item-text">new note</p>
            </div>
            <div className="completed">
              <img src={completed} alt="completed image" />
              <p className="hor-menu-item-text">completed</p>
            </div>
            {/* <div className="recently-deleted">
              <img src={recentlyDeleted} alt="recently deleted image" />
              <p className="hor-menu-item-text">Recently deleted</p>
            </div> */}
          </div>
          <div className="horison-menu-second-block">
            <div className="folders">Folders</div>
            <div className={homeClass} onClick={() => openHomePage()}>
              Home
            </div>
            <div className="folders">Calendar</div>
          </div>
          <div className="horison-menu-third-block">
            {/* <div className="sort">
              <img src={sort} alt="sort image" />
              sort by
            </div> */}
          </div>
        </div>
        {this.state.isModalOpened && (
          <NewNoteModal
            isOpened={this.state.isModalOpened}
            closeModal={this.closeModal}
            addItem={addItem}
            onEnterCloseModal={onEnterCloseModal}
          />
        )}
      </>
    );
  }
}
