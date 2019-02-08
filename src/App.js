import React, { Component } from "react";
import TextField from "./components/text-field-plain";
import CheckboxField from "./components/checkbox-field-plain";
import CheckboxFieldReactified from  "./components/checkbox-field-reactified";
import CheckboxFieldWc from './wc-components/checkbox-field-wc';

customElements.define('checkbox-field', CheckboxFieldWc)

class App extends Component {
  render() {
    return (
      <div>
        <TextField/>
        <CheckboxField/>
        <CheckboxFieldReactified/>
        <input type="checkbox" checked/>
      </div>
    );
  }
}

export default App;
