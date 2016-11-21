import getElementFromTemplate from '../add-template';

const resultTemplate = getElementFromTemplate('<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>\n' +
  '<h2 class="title">Вы настоящий меломан!</h2>\n' +
  '<div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>\n' +
  '<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>\n' +
  '<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>', 'main--result');

export default resultTemplate;
