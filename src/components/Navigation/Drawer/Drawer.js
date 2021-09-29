import React, { Component } from "react";
import "./Drawer.css";

const links = [1, 2, 3];

export default class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return <li key={index}>Link {link}</li>;
    });
  }

  render() {
    const cls = ['Drawer'];

    if (!this.props.isOpen) {
      cls.push('close');
    }

    return (
      <nav className={cls.join(' ')}>
        <ul>{this.renderLinks()}</ul>
      </nav>
    );
  }
}
