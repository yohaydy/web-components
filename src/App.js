import React, { Component } from "react";
import TextField from "./components/text-field/text-field";
import CheckboxField from "./components/checkbox-field/checkbox-field";

class App extends Component {
  render() {
    return (
      <div>
        {/* <TextField/> */}
        <CheckboxField/>
      </div>
    );
  }
}

export default App;
