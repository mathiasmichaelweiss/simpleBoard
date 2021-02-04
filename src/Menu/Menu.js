import React, { Component } from "react";
import "./Menu.css";
import home from "./MenuImg/MenuIcons/home.svg";
import folder from "./MenuImg/MenuIcons/folder.svg";
import calendar from "./MenuImg/MenuIcons/calendar.svg";
import settings from "./MenuImg/MenuIcons/settings.svg";
import logOut from "./MenuImg/MenuIcons/logOut.svg";
import photo from "./MenuImg/photo.jpg";

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      openProfSettings,
      openHomePage,
      openMyFolders,
      avatar,
      name,
      surname
    } = this.props;
    return (
      <>
        <div className="invisible-block" />
        <div className="container-menu">
          <div className="user">
            <div className="logo" />
            <img className="user-photo" src={avatar} />
            <div className="user-name">
              {name} {surname}
            </div>
          </div>
          <div className="menu">
            <div className="menu-home" onClick={() => openHomePage()}>
              <div className="menu-icon">
                <img src={home}></img>
              </div>
              Home
            </div>
            <div className="menu-folders" onClick={() => openMyFolders()}>
              <div className="menu-icon">
                <img src={folder}></img>
              </div>
              My folders
            </div>
            <div className="menu-calendar">
              <div className="menu-icon">
                <img src={calendar}></img>
              </div>
              Calendar
            </div>
            <div className="menu-settings" onClick={() => openProfSettings()}>
              <div className="menu-icon">
                <img src={settings}></img>
              </div>
              Profile settings
            </div>
          </div>
          <div className="logOut">
            <div className="menu-icon">
              <img src={logOut}></img>
            </div>
            Log out
          </div>
        </div>
      </>
    );
  }
}
