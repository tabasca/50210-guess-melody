import getElementFromTemplate from '../add-template';
import screensEngine from '../game';

const result = {
  title: 'Вы настоящий меломан!',
  stats: {
    time: 2,
    count: 4,
    percent: 80
  },
  events: {
    goTo: 0
  }
};

const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';

const stats = '<div class="main-stat">За&nbsp;' + result.stats.time + '&nbsp;минуты<br>вы&nbsp;отгадали ' + result.stats.count + '&nbsp;мелодии</div>' +
  '<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;' + result.stats.percent + '%&nbsp;игроков</span>';

const content = '<section class="main main--result">' +
  logo +
  '<h2 class="title">' + result.title + '</h2>' +
  stats +
  '<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>' +
  '</section>';

const resultElem = getElementFromTemplate(content);

let actionBtn = resultElem.querySelector('.main-replay');

actionBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  screensEngine(result.events.goTo);
});

export default resultElem;
