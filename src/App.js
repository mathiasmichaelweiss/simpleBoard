import React, { Component } from "react";
import Menu from "./Menu/Menu";
import SearchPanel from "./SearchPanel/SearchPanel";
import HorizontalMenu from "./HorizontalMenu/HorizontalMenu";
import NoteBoard from "./NoteBoard/NoteBoard";
import ProfileSettings from "./ProfileSettings/ProfileSettings";

import noAvatar from "./images/noAvatar.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: "12312sasda",
          completed: false,
          title: "Example note",
          text: "Write some note. To do this click 'new note'",
          isCompleted: false
        }
      ],
      modal: false,
      profSettings: false,
      homePage: true,
      avatar: noAvatar,
      name: "name",
      surname: ""
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.onEnterCloseModal = this.onEnterCloseModal.bind(this);
    this.openProfSettings = this.openProfSettings.bind(this);
    this.openHomePage = this.openHomePage.bind(this);
    this.changeFullName = this.changeFullName.bind(this);
    this.changeAvatar = this.changeAvatar.bind(this);
  }

  getLocalStorage() {
    localStorage.setItem("allTodos", this.state.todos);
    localStorage.getItem("allTodos");
    localStorage.setItem("name", this.state.name);
    localStorage.getItem("name");
    localStorage.setItem("surname", this.state.surname);
    localStorage.getItem("surname");
  }

  componentWillMount() {
    localStorage.getItem("todos", "name", "surname") &&
      this.setState({
        todos: JSON.parse(localStorage.getItem("todos")),
        name: JSON.parse(localStorage.getItem("name")),
        surname: JSON.parse(localStorage.getItem("surname"))
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("todos", JSON.stringify(nextState.todos));
    localStorage.setItem("todosData", Date.now());
    localStorage.setItem("name", JSON.stringify(nextState.name));
    localStorage.setItem("nameData", Date.now());
    localStorage.setItem("surname", JSON.stringify(nextState.surname));
    localStorage.setItem("surnameData", Date.now());
  }

  getRandomId = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

  addItem(addTitle, addText) {
    // 1) Создать новый элемент(объект)
    const newItem = {
      id: this.getRandomId(),
      completed: false,
      title: addTitle,
      text: addText
    };
    // 2) Поместить его в state
    this.setState(({ todos }) => {
      // Создаем новый массив, который будет добавляться в state
      const newArr = [...todos, newItem];
      return {
        todos: newArr
      };
    });
  }

  deleteItem(id) {
    this.setState(({ todos }) => {
      // ищем индекс элемента который хотим удалить
      // Сравниваем id elem c тем id, который пришел с noteItem
      const index = todos.findIndex(elem => elem.id === id);
      // Вырезаем элемент из массива todos при помощи метода slice
      // 1-й аргумент splice(с какого индекса начинаем, второй, сколько удаляем элементов из массива)
      // Когда используется метод slice, нужно создать 2 массива (массив - до) и (массив - после) а потом две части соединить в один большой массив
      const before = todos.slice(0, index);
      const after = todos.slice(index + 1); // со следующего элемента после before(после индекса), что бы при соединении получить один целый, полный массив
      const newArr = [...before, ...after];

      return {
        todos: newArr
      };
    });
  }

  changeFullName(addName, addSurname, avatar) {
    this.setState({
      name: addName,
      surname: addSurname,
      avatar: avatar
    });
  }

  changeAvatar(addAvatar) {
    this.setState({
      avatar: addAvatar
    });
  }

  onEnterCloseModal() {
    this.setState({
      modal: false
    });
  }

  openProfSettings = () => {
    if (!this.state.profSettings) {
      this.setState({
        profSettings: true,
        homePage: false
      });
    }
  };

  openHomePage = () => {
    if (!this.state.homePage) {
      this.setState({
        homePage: true,
        profSettings: false
      });
    }
  };

  render() {
    const {
      todos,
      modal,
      profSettings,
      homePage,
      avatar,
      name,
      surname
    } = this.state;
    const { isCompleted } = this.state.todos;
    if (profSettings) {
      return (
        <div className="App">
          <div className="container">
            <Menu
              openProfSettings={this.openProfSettings}
              openHomePage={this.openHomePage}
              avatar={avatar}
              name={name}
              surname={surname}
            />
            <div className="notes-block-container">
              <SearchPanel />
              <HorizontalMenu
                modal={modal}
                addItem={this.addItem}
                onEnterCloseModal={this.onEnterCloseModal}
                isHomePage={homePage}
                openHomePage={this.openHomePage}
              />
              <ProfileSettings
                avatar={avatar}
                name={name}
                surname={surname}
                changeFullName={this.changeFullName}
                changeAvatar={this.changeAvatar}
              />
            </div>
          </div>
        </div>
      );
    } else if (homePage) {
      return (
        <div className="App">
          <div className="container">
            <Menu
              openProfSettings={this.openProfSettings}
              openHomePage={this.openHomePage}
              avatar={avatar}
              name={name}
              surname={surname}
            />
            <div className="notes-block-container">
              <SearchPanel />
              <HorizontalMenu
                modal={modal}
                addItem={this.addItem}
                onEnterCloseModal={this.onEnterCloseModal}
                isHomePage={homePage}
                openHomePage={this.openHomePage}
              />
              <NoteBoard
                todos={todos}
                onDelete={this.deleteItem}
                onCompleted={this.completedToggle}
                isCompleted={isCompleted}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
