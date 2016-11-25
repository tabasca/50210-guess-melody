import getElementFromTemplate from '../add-template';
import renderTemplate from '../render-template';

const welcomeTemplate = getElementFromTemplate('<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>\n' +
  '<button class="main-play">Начать игру</button>\n' +
  '<h2 class="title main-title">Правила игры</h2>\n' +
  '<p class="text main-text">\n' +
  'Правила просты&nbsp;— за&nbsp;2 минуты дать\n' +
  'максимальное количество правильных ответов.<br>\n' +
  'На&nbsp;каждую мелодию всего 3 варианта ответа.<br>\n' +
  'Удачи!\n' +
  '</p>', 'main--welcome');

let body = document.querySelector('body');

body.addEventListener('click', function (evt) {

  if (evt.target.classList.contains('main-play')) {
    renderTemplate(1);
  }
});

export default welcomeTemplate;
