import Button from '../button';

test('should validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.querySelector('#container');
  const button = new Button(container);
  button.bindToDOM();
  const submit = container.querySelector('.button');
  submit.click();
  const widget = document.querySelector('.widget');
  expect(widget).toBeTruthy();
});
