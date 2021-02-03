import React, { Component } from "react";
import axios from "axios";
import "./ProfileSettings.css";

import photo from "../Menu/MenuImg/photo.jpg";
import noAvatar from "../images/noAvatar.jpg";

export default class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "name",
      newSurname: "surname",
      avatar: photo
    };
    this.onValueChangeName = this.onValueChangeName.bind(this);
    this.onValueChangeSurname = this.onValueChangeSurname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChangeName(e) {
    this.setState({
      newName: e.target.value
    });
  }

  onValueChangeSurname(e) {
    this.setState({
      newSurname: e.target.value
    });
  }

  onChangePhoto(e) {
    // e.target.files[0] - файл который я добавил
    let newAvatar = e.target.files[0];
  }

  fileUploadHendler = () => {
    axios.post("");
  };

  onSubmit(e) {
    e.preventDefault();

    this.props.changeFullName(this.state.newName, this.state.newSurname);

    this.props.changeAvatar(this.state.avatar);
  }

  render() {
    const { avatar, name, surname } = this.props;
    const { newName, newSurname } = this.state;
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
          <form onSubmit={this.onSubmit} className="prof-set-form">
            <img className="photo" src={avatar} />
            <div className="prof-name-surname">
              <input
                type="name"
                placeholder={name}
                className="pr-set-input"
                onChange={this.onValueChangeName}
                value={newName}
              />
              <input
                type="surname"
                placeholder={surname}
                className="pr-set-input"
                onChange={this.onValueChangeSurname}
                value={newSurname}
              />
            </div>
            <div className="add-photo">
              <input
                type="file"
                accept=".jpeg, .png, .jpg"
                onChange={this.onChangePhoto}
              />
            </div>
            <button className="btn-add mr-zero mb15" type="submit">
              change
            </button>
          </form>
        </div>
      </>
    );
  }
}
