import React, { Component } from "react";
import TextField from "./components/text-field/text-field";
import CheckboxField from "./components/checkbox-field/checkbox-field";
import CheckboxFieldReactified from  "./components/checkbox-field-reactified/checkbox-field";

class App extends Component {
  render() {
    return (
      <div>
        {/* <TextField/> */}
        <CheckboxField/>
        <CheckboxFieldReactified/>
      </div>
    );
  }
}

export default App;
