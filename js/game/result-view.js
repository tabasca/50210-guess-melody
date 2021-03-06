import AbstractView from './view';
import Application from './game-view';

export default class ResultView extends AbstractView {
  constructor(data) {
    super();

    this.result = data;
  }

  getMarkup() {
    const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';
    const stats = `<div class="main-stat">За&nbsp;${this.result.stats.time}&nbsp;минуты<br>вы&nbsp;отгадали ${this.result.stats.score}&nbsp;мелодии</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.result.stats.percent}%&nbsp;игроков</span>`;

    return `<section class="main main--result">
        ${logo}
        <h2 class="title">${this.result.title}</h2>
        ${stats}
        <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
      </section>`;
  }

  bindHandlers() {
    this.actionBtn = this._elem.querySelector('.main-replay');

    this.actionBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      Application.showWelcome();
    });
  }
}
