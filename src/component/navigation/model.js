import GenericElement from '../../core/GenericElement.js';
import view from 'html-loader!./view.html';
import header from '../header/model.js';
import home from '../home/model.js';
export default class Navigation extends GenericElement {
  constructor() {
    super(view);
    this.subscribe({channel:'main',topic:'myEvent', callback:(data) => {
      console.log('myEvent',data);
    }});
  }
  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal);
  }


  setData(data) {

  }
}
window.customElements.define('navigation-wc', Navigation);
