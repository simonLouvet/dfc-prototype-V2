import GenericElement from '../../core/genericElement.js';
import view from 'html-loader!./view.html';
export default class Screen2 extends GenericElement {
  constructor() {
    super(view);
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
window.customElements.define('screen2-wc', Screen2);
