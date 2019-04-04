import postal from 'postal';
export default class GenericElement extends HTMLElement {
  constructor(view) {
    super();
    this.subscriptions=[];
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.innerHTML = view;
  }
  connectedCallback() {
    this.propagatedStyle = this.querySelectorAll('style');
    this.propagatedStyle.forEach(style => {
      let injectedStyle = document.createElement('style');
      injectedStyle.appendChild(document.createTextNode(style.innerText));
      this.shadowRoot.appendChild(injectedStyle)
    })
  }

  disconnectedCallback() {
    this.subscriptions.forEach(s => {
      s.unsubscribe();
    })
  }

  attributeChangedCallback(attrName, oldVal, newVal) {}

  subscribe(options){
    this.subscriptions.push(postal.subscribe(options))
  }

  setData(data) {

  }
}
