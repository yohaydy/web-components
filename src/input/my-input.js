class MyInput extends HTMLElement {
  constructor() {
    super();
    const value = this.getAttribute("value");
    const root = this.attachShadow({ mode: "open" });
    // console.log("THIS>value", value)
    root.innerHTML = `Hello <input value='${value}'/> `;

    this.addEventListener("keypress", evt => {
      evt.preventDefault();
      const value = this.getAttribute("value") + evt.key;
      const customEvent = new CustomEvent("change", {
        bubbles: true,
        detail: { value }
      });

      this.dispatchEvent(customEvent);
    });
  }
}

customElements.define("my-input", MyInput);
