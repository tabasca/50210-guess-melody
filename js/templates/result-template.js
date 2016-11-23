import getElementFromTemplate from '../add-template';
import ScreensEngine from '../game';

const result =  {
  content: {
    title: 'Вы настоящий меломан!',
    statistic: {
      time: 2,
      count: 4,
      percent: 80
    }
  },
  events: {
    goTo: 0
  }
};

const content = '<section class="main main--result">' +
  '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>' +
  '<h2 class="title">' + result.content.title + '</h2>' +
  '<div class="main-stat">За&nbsp;' + result.content.statistic.time + '&nbsp;минуты<br>вы&nbsp;отгадали ' + result.content.statistic.count + '&nbsp;мелодии</div>' +
  '<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;' + result.content.statistic.percent + '%&nbsp;игроков</span>' +
  '<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>' +
  '</section>';

const resultElem = getElementFromTemplate(content);

let actionBtn = resultElem.querySelector('.main-replay');

actionBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  ScreensEngine(result.events.goTo);
});

export default resultElem;
