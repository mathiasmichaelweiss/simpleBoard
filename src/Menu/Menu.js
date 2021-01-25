import React, { Component } from "react";
import "./Menu.css";
import home from "./MenuImg/MenuIcons/home.svg";
import folder from "./MenuImg/MenuIcons/folder.svg";
import calendar from "./MenuImg/MenuIcons/calendar.svg";
import settings from "./MenuImg/MenuIcons/settings.svg";
import logOut from "./MenuImg/MenuIcons/logOut.svg";

export default class Menu extends Component {
  render() {
    return (
      <>
        <div className="container-menu">
          <div className="user">
            <div className="logo" />
            <div className="user-photo" />
            <div className="user-name">Mathias Weiss</div>
          </div>
          <div className="menu">
            <div className="menu-home">
              <div className="menu-icon">
                <img src={home}></img>
              </div>
              Home
            </div>
            <div className="menu-folders">
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
            <div className="menu-settings">
              <div className="menu-icon">
                <img src={settings}></img>
              </div>
              Settings
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
