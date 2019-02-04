import React, { Component } from 'react';
import CheckboxFieldReactified from './checkbox-field-wc';

export default class CheckboxField extends Component {
  state = {
    value: true,
  };

  onChange = () => {
    this.setState({ value: !this.state.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <CheckboxFieldReactified
          label="Reacrified"
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
