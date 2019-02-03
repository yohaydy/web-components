import React, { Component } from "react";
import "./checkbox-field-wc";

export default class CheckboxField extends Component {
  constructor() {
    super();
    this.checkbox = React.createRef();
  }

  componentDidMount() {
    this.checkbox.current.addEventListener("change", () => {
      this.setState({ value: !this.state.value });
    });
  }

  state = {
    value: true
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <checkbox-field ref={this.checkbox} label="Over 18" value={value} />
      </div>
    );
  }
}

// 1. Events should be attached in imperative way
// 2. Objects and arrays cannot be passed as a properties
