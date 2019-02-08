import React, { Component } from 'react';
import reactify from 'skatejs-react-integration';
import CheckboxFieldWc from '../wc-components/checkbox-field-wc';

let CheckboxFieldReactifiedWc;
export default class CheckboxField extends Component {
  constructor(){
    super()
    CheckboxFieldReactifiedWc = reactify(CheckboxFieldWc);
  }
  
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
        <CheckboxFieldReactifiedWc
          label="Reacrified"
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
