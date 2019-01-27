class CheckboxField extends HTMLElement {
  constructor(props) {
    super(props);
    this.shadow = this.attachShadow({ mode: "open" });
    this.checked = false;
  }

  static get observedAttributes() {
    return ["value"];
  }

  attributeChangedCallback() {
    this.value = this.getAttribute("value");
    this.render();
  }

  connectedCallback() {
    this.value = this.getAttribute("value");
    this.label = this.getAttribute("label");
    this.render();

    this.shadow.addEventListener("click", () => {
      const event = new Event('change');
      this.dispatchEvent(event);
    });
  }

  render() {
    this.shadow.innerHTML = `
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
          background: ${this.value === "true" ? "#555" : "#fff"};
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
          ${this.label}
        </label> 
      </container>
    `;
  }
}
customElements.define("checkbox-field", CheckboxField);
