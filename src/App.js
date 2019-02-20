import React, { Component } from "react";
import CheckboxField from "./components/checkbox-field";
import CheckboxFieldReactified from "./components/checkbox-field-reactified";
import CheckboxFieldWc from "./web-components/checkbox-field-wc";

customElements.define("checkbox-field", CheckboxFieldWc);

class App extends Component {
  render() {
    return (
      <div>
        <CheckboxField />
        <CheckboxFieldReactified />
      </div>
    );
  }
}

export default App;
