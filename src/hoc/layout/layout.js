import React, { Component } from "react";
import "./layout.css";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle.js";
import Drawer from "../../components/Navigation/Drawer/Drawer.js";
export default class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    return (
      <div className='Layout'>
        <Drawer isOpen={this.state.menu} />
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <main>{this.props.children}</main>
      </div>
    );
  }
}
