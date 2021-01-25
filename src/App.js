import React, { Component } from "react";
import Menu from "./Menu/Menu";
import NotesBlock from "./NotesBlock/NotesBlock";
import NewNoteModal from "./NewNoteModal/NewNoteModal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          completed: false,
          title: "Hello World",
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took"
        },
        {
          id: 2,
          completed: false,
          title: "toggle JavaScript",
          text:
            "The toggle() method of the DOMTokenList interface removes a given token from the list and returns false. If token doesn't exist it's added and the function returns true."
        },
        {
          id: 3,
          completed: false,
          title: "Fetch API",
          text:
            "The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network."
        },
        {
          id: 3,
          completed: false,
          title: "Single-page application (SPA)",
          text:
            "A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages."
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <NewNoteModal />
          <Menu />
          <NotesBlock todos={this.state.todos} />
        </div>
      </div>
    );
  }
}
