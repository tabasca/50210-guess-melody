import getElementFromTemplate from '../add-template';
import ScreensEngine from '../game';

const welcome =  {
  content: {
    title: 'Правила игры',
    text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br>На&nbsp;каждую мелодию всего 3 варианта ответа.<br>Удачи!'
  },
  events: {
    goTo: 1,
  }
};

const content = '<section class="main main--welcome">' +
  '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>' +
  '<button class="main-play">Начать игру</button>' +
  '<h2 class="title main-title">' + welcome.content.title + '</h2>' +
  '<p class="text main-text">' + welcome.content.text + '</p>' +
  '</section>';

const welcomeElem = getElementFromTemplate(content);

let actionBtn = welcomeElem.querySelector('.main-play');

actionBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  ScreensEngine(welcome.events.goTo);
});

export default welcomeElem;
