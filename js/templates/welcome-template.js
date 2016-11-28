import getElementFromTemplate from '../add-template';
import screensEngine from '../game';

const welcome = {
  title: 'Правила игры',
  text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br>На&nbsp;каждую мелодию всего 3 варианта ответа.<br>Удачи!',
  events: {
    goTo: 1,
  }
};

const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';

const content = '<section class="main main--welcome">' +
  logo +
  '<button class="main-play">Начать игру</button>' +
  '<h2 class="title main-title">' + welcome.title + '</h2>' +
  '<p class="text main-text">' + welcome.text + '</p>' +
  '</section>';

const welcomeElem = getElementFromTemplate(content);

let actionBtn = welcomeElem.querySelector('.main-play');

actionBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  screensEngine(welcome.events.goTo);
});

export default welcomeElem;
