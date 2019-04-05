import GenericElement from '../../core/genericElement.js';
import view from 'html-loader!./view.html';
import header from '../header/model.js';
import home from '../home/model.js';
import menu from '../menu/model.js';
import screen1 from '../screen1/model.js';
import screen2 from '../screen2/model.js';
export default class Navigation extends GenericElement {
  constructor() {
    super(view);
    this.subscribe({
      channel: 'main',
      topic: 'screen',
      callback: (data) => {
        console.log('screen', data);
        this.loadComponent(data);
      }
    });
  }

  loadComponent(comp) {
    let screen = this.shadowRoot.querySelector('#screen');
    let component = document.createElement(comp);
    while (screen.firstChild != null) {
      screen.removeChild(screen.firstChild);
    }

    screen.appendChild(component);
    return component;
  }

  connectedCallback() {
    super.connectedCallback();
    // this.loadComponent('home-wc');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal);
  }

}
window.customElements.define('navigation-wc', Navigation);
