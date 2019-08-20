import { html, render } from 'lit-html';

const myTemplate = (name) => html`<p>Hello ${name}</p><p>From lit-html!</p>`;

const container = document.getElementById("lit-content");
const value = container['data-value'];
render(myTemplate(value), container);
