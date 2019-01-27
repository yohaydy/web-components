class TextField extends HTMLElement {
  constructor(props) {
    super(props);
    this.shadow = this.attachShadow({ mode: "open" });
    this.value = "";
    this.label = "";
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

    this.shadow.getElementById("myId").addEventListener("keypress", evt => {
      console.log("keypress");
      evt.preventDefault(); // Works, but then "input" event is not triggered
    });

    this.shadow.getElementById("myId").addEventListener("input", evt => {
      console.log("input");
      evt.preventDefault(); // Do not work
    });
  }

  render() {
    this.shadow.innerHTML = `
    <span> ${this.label} </span> 
    <input id="myId" value="${this.value}"/> 
    `;
  }
}
customElements.define("text-field", TextField);
