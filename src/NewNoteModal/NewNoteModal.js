import React, { Component } from "react";

import "./NewNoteModal.css";

export default class NewNoteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      isActive: this.props.isOpened
    };
    this.onValueChangeTitle = this.onValueChangeTitle.bind(this);
    this.onValueChangeText = this.onValueChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChangeTitle(e) {
    // event нужен для того, что бы получать именно value из input
    this.setState({
      title: e.target.value
    });
  }

  onValueChangeText(e) {
    // event нужен для того, что бы получать именно value из input
    this.setState({
      text: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    //  Во время события отправки формы, будет вызываться функция создания нового поста, куда передаем данные из стейта
    this.props.addItem(this.state.title, this.state.text);
    /* Получается:
    1) Мы отслеживаем события изменения внутри формы
    2) Отслежимаем когда пользователь отправит нашу форму
    3) при отправке срабатывает onSubmit функция и она вызывает метод addItem, который принимает в себя необходимые данные из стейта */
    this.setState({
      title: "",
      text: ""
    });
  }

  render() {
    const { title, text } = this.state;
    const { closeModal, onEnterCloseModal } = this.props;
    const {} = this.state;
    const {} = this.state;
    if (this.state.isActive) {
      return (
        <>
          <div className="new-note-container">
            <div className="new-note-modal">
              <div className="modal-title">
                <p>New note</p>
                <div className="delete-btn" onClick={() => closeModal()}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="8" fill="#FF4D4D" />
                    <path
                      d="M5.17163 5.17163L10.8285 10.8285"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.8285 5.17163L5.17164 10.8285"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  placeholder="title"
                  className="new-note-title"
                  /* Отслеживаем изменения в инпуте */
                  onChange={this.onValueChangeTitle}
                  value={title}
                />
                <textarea
                  type="textarea"
                  placeholder="note text"
                  rows="10"
                  cols="12"
                  onChange={this.onValueChangeText}
                  value={text}
                ></textarea>
                <button
                  className="btn-add"
                  type="submit"
                  onClick={() => onEnterCloseModal()}
                >
                  add
                </button>
              </form>
            </div>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  }
}
