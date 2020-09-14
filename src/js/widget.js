export default class Widget {
  static getMarkup() {
    const widget = document.createElement('div');
    widget.classList.add('widget');
    widget.innerHTML = `
            <p>Popover title</p>
            <hr/>
            <p>And here\`s some amazing content. It\`s very engaging. Right?</p>`;
    return widget;
  }
}
