// Core
import React from "react";

// Style
import "./main.scss";

export class Main extends React.Component {
  _renderNav() {
    const nav = this.props.data.map((item) => {
      return (
        <li>
          <a href={item.link} target="_blank">
            {item.content}
          </a>
        </li>
      );
    });
    return nav;
  }

  render() {
    return (
      <div className="main">
        <p>You can choose link to read:</p>
        <ol>{this._renderNav()}</ol>
      </div>
    );
  }
}
