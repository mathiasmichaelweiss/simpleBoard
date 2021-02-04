import React, { Component } from "react";
import Folder from "../Folder/Folder";

import "./MyFolders.css";

export default class MyFolders extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { folders } = this.props;
    return (
      <>
        <div className="my-folders-container">
          {folders.map(folder => {
            if (folder.id) {
              return <Folder folder={folder} key={folder.id} />;
            }
          })}
        </div>
      </>
    );
  }
}
