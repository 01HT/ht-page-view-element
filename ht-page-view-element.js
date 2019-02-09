import { LitElement } from "lit-element";

export class HTPageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate(changedProps) {
    return this.active;
  }

  static get properties() {
    return { active: { type: Boolean } };
  }
}
