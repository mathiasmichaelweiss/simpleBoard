import React, { Component } from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
  render() {
    return (
      <>
        <div className="search-panel-container">
          <div className="search-panel">
            <form action="#" className="search-form">
              <div className="castom-input">
                <input
                  type="search"
                  id="notes-search"
                  placeholder="search...."
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
