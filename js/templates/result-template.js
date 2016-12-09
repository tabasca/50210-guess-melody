import getElementFromTemplate from '../add-template';
import {startGame} from '../game';
import getWelcomeTemplate from '../templates/welcome-template';
import {welcome} from '../data/welcome';

const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';

export default (data) => {
  const stats = `<div class="main-stat">За&nbsp;${data.stats.time}&nbsp;минуты<br>вы&nbsp;отгадали ${data.stats.score}&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.stats.percent}%&nbsp;игроков</span>`;

  const content = `<section class="main main--result">
        ${logo}
        <h2 class="title">${data.title}</h2>
        ${stats}
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;

  let elem = getElementFromTemplate(content);

  let actionBtn = elem.querySelector('.main-replay');

  actionBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    startGame(getWelcomeTemplate(welcome));
  });

  return elem;
};
