import React, { Component } from "react";

export default class MyApp extends Component {
  state = {
    checked: false
  };

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <my-checkbox checked={checked} onChange={this.toggleCheckbox} />
      </div>
    );
  }
}
