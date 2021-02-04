import React, { Component } from "react";
import Folder from "../Folder/Folder";

import "./MyFolders.css";

export default class MyFolders extends Component {
  render() {
    return (
      <>
        <div className="my-folders-container">
          <Folder />
        </div>
      </>
    );
  }
}
