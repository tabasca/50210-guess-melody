import AbstractView from './view';

export default class WelcomeView extends AbstractView {
  constructor(data) {
    super();

    this.welcome = data;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';

    return `<section class="main main--welcome">
        ${logo}
        <button class="main-play">Начать игру</button>
        <h2 class="title">${this.welcome.title}</h2>
        <p class="text main-text">${this.welcome.text}</p>
      </section>`;
  }

  bindHandlers() {
    let that = this;

    this.actionBtn = this._elem.querySelector('.main-play');

    this.actionBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      that._onAnswer(that.model);
    });
  }
}

