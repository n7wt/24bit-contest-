const langToggle = document.getElementById('language-toggle');
const menuChange = document.querySelectorAll('.menu__link');

langToggle.addEventListener('click', () => {
  langToggle.classList.toggle('toggle');
  if (langToggle.classList.contains('toggle')) {
    menuChange.forEach(link => {
      if (link.textContent === 'Главная') {
        link.textContent = 'Бохь';
      } else if (link.textContent === 'История') {
        link.textContent = 'Истори';
      } else if (link.textContent === 'Культура') {
        link.textContent = 'Оьздангалла';
      } else if (link.textContent === 'Галерея') {
        link.textContent = 'Галерея';
      } else if (link.textContent === 'Контакты') {
        link.textContent = 'Контактш';
      }
    });
  } else {
    menuChange.forEach(link => {
      if (link.textContent === 'Бохь') {
        link.textContent = 'Главная';
      } else if (link.textContent === 'Истори') {
        link.textContent = 'История';
      } else if (link.textContent === 'Оьздангалла') {
        link.textContent = 'Культура';
      } else if (link.textContent === 'Галерея') {
        link.textContent = 'Галерея';
      } else if (link.textContent === 'Контактш') {
        link.textContent = 'Контакты';
      }
    });
  }
});
