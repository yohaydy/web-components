import React, { Component } from 'react';

export default class CheckboxField extends Component {
  constructor() {
    super();
    this.checkbox = React.createRef();
  }

  state = {
    value: true,
  };

  componentDidMount() {
    // Listening for events
    this.checkbox.current.addEventListener('change', () => {
      this.setState({ value: !this.state.value });
    });
    this.updateCheckboxValue();
  }

  updateCheckboxValue = () => {
    const { value } = this.state;
    if (this.checkbox.current) {
      // Passing state
      this.checkbox.current.value = value;
    }
  };

  componentDidUpdate() {
    this.updateCheckboxValue();
  }

  render() {
    return (
      <div>
        <checkbox-field ref={this.checkbox} label="Over 18" />
      </div>
    );
  }
}
