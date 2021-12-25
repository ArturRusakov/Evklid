window.addEventListener('DOMContentLoaded', () => {
  const hamb = document.getElementById('hamb');
  const popup = document.getElementById('popup');
  const menu = document.getElementById('menu').cloneNode(1);
  const body = document.body;

  hamb.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll');
    // hamb.classList.toggle('active');
    renderPopup();
  });

  function renderPopup() {
    popup.appendChild(menu);
    console.log(popup);
  }
});
