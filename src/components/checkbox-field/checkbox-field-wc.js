class CheckboxField extends HTMLElement {
    constructor(props) {
      super(props);
      this.shadow = this.attachShadow({ mode: "open" });
      this.checked = false;
    }
  
    // static get observedAttributes() {
    //   return ["value"];
    // }
  
    // attributeChangedCallback() {
    //   this.value = this.getAttribute("value");;
    //   this.render();
    // }
  
    connectedCallback() {
      this.value = this.getAttribute("value");
      console.log("value", this.value)
      this.render();
  
    //   this.shadow.getElementById("myId").addEventListener("keypress", evt => {
    //     console.log("keypress");
    //     evt.preventDefault(); // Works, but then "input" event is not triggered
    //   });
  
    //   this.shadow.getElementById("myId").addEventListener("input", evt => {
    //     console.log("input");
    //     evt.preventDefault(); // Do not work
    //   });
    }
  
    render() {
      this.shadow.innerHTML = `<style>  </style> <div id="checkbox"> KEKERA </div> `;
    }
  }
  customElements.define("checkbox-field", CheckboxField);
  