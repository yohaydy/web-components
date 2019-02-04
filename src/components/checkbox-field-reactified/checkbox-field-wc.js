import reactify from 'skatejs-react-integration';

class CheckboxField extends HTMLElement {
  constructor(props) {
    super(props);
    this._shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this._render();

    this._shadow.addEventListener("click", () => {
      const event = new Event('change');
      this.dispatchEvent(event);
    });
  }

  set value(newValue) {
    this._value = newValue;
    this._render();
  }

  set label(newValue) {
    this._label = newValue;
    this._render();
  }

  _render() {
    this._shadow.innerHTML = `
      <style> 
        container {
          margin: 100px auto;
          width: 200px;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        label {
          color: #555;
          font-size: 30px;
          cursor: pointer;
        }
        checkbox {
          background: ${this._value ? "#555" : "#fff"};
          border: 3px solid #555;
          border-radius: 10px;
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }
      </style> 
        
      <container>
        <checkbox></checkbox>
        <label>
          ${this._label}
        </label> 
      </container>
    `;
  }
}

//TODO: define after import ?
customElements.define("checkbox-field-2", CheckboxField);

export default reactify(CheckboxField);
