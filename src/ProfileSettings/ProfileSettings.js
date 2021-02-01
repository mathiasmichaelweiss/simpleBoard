import React, { Component } from "react";

import "./ProfileSettings.css";

import photo from "../Menu/MenuImg/photo.jpg";

export default class ProfileSettings extends Component {
  render() {
    return (
      <>
        <div className="prof-settings-container">
          <div className="prof-title-desct">
            <div className="prof-title">Profile settings</div>
            <div className="prof-descr">
              Profile settings allows you to change your profile picture and
              adjust your account information
            </div>
          </div>
          <form className="prof-set-form">
            <img className="photo" src={photo} />
            <div className="prof-name-surname">
              <input
                type="name"
                placeholder="Mathias"
                className="pr-set-input"
              />
              <input
                type="surname"
                placeholder="Weiss"
                className="pr-set-input"
              />
            </div>
            <div className="add-photo">
              <input type="file" accept=".jpeg, .png, .jpg" />
            </div>
            <button className="btn-add mr-zero mb15">change</button>
          </form>
        </div>
      </>
    );
  }
}
