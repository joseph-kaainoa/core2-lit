import { html, render } from 'lit-html';

const myTemplate = (name) => html`<p>Hello ${name}</p><p>From lit-html!</p>`;

render(myTemplate('World!'), document.getElementById("lit-content"));
