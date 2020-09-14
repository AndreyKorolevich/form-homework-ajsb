import Widget from './widget';

export default class Button {
  constructor(container) {
    this.container = container;
    this.widget = Widget.getMarkup();
  }
  /* eslint-disable */
  getMarkup() {
    return `
        <button type="button" class="button">Dismissible popover</button>
    `;
  }

  bindToDOM() {
    this.container.innerHTML = this.getMarkup();
    const submit = this.container.querySelector('.button');
    submit.addEventListener('click', (event) => this.onSubmit(event));
  }

  onSubmit(event) {
    document.body.appendChild(this.widget);
    const { top, left } = event.target.getBoundingClientRect();
    this.widget.style.top = `${window.scrollY + top - event.target.offsetHeight / 2 - this.widget.offsetHeight}px`;
    this.widget.style.left = `${window.scrollX + left - (this.widget.offsetWidth - event.target.offsetWidth) / 2}px`;
  }
}
