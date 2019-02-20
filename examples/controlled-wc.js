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
        <my-checkbox
          value={checked}
          label="My Checkbox"
          onChange={this.toggleCheckbox}
        />
      </div>
    );
  }
}
