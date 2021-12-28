window.addEventListener('DOMContentLoaded', () => {
  const listOfAccordItems = document.getElementsByClassName('accordion__item');

  for (let index = 0; index < listOfAccordItems.length; index++) {
    listOfAccordItems[index].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }
});
