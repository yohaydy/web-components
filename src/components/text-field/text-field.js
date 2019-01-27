import React, { Component } from "react";
import "./text-field-wc";

export default class extends Component {
  state = {
    value: "+"
  };
  render() {
    const { value } = this.state;
    return (
      <div>
        <div>value: {value}</div>
        <button onClick={() => this.setState({ value: value + "+" })}>
          Increment
        </button>
        
        <text-field label="Full Name" value={value} /> 
      </div>
    );
  }
}
