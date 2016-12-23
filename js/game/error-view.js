import AbstractView from './view';
import Application from './game-view';

export default class ErrorView extends AbstractView {
  constructor() {
    super();
  }

  getMarkup() {
    const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';
    const stats = `<div class="main-stat">Ошибка загрузки с сервера</div>
    <span class="main-comparison">Соррян</span>`;

    return `<section class="main main--result">
    ${logo}
    <h2 class="title"></h2>
    ${stats}
    <span role="button" tabindex="0" class="main-replay">Попробуем еще раз?</span>
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
