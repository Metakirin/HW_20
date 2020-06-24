// Core
import React from "react";

export class Footer extends React.Component {
  _renderContacts() {
    const contacts = this.props.data.map((item) => {
      return <li>{item.content}</li>;
    });
    return contacts;
  }

  render() {
    return (
      <div>
        <p>Our contacts:</p>
        <ul>{this._renderContacts()}</ul>
      </div>
    );
  }
}
