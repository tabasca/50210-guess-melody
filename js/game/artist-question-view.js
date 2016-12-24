import AbstractView from './view';

import player from '../player';

export default class ArtistQuestionView extends AbstractView {
  constructor(data) {
    super();

    this.question = data;
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getAnswers(list) {
    let answer = '';
    let counter = 0;

    for (let it of list) {
      counter++;

      answer += '<div class="main-answer-wrapper">' +
        '<input class="main-answer-r" type="radio" id="answer-' + counter + '" name="answer" value="' + counter + '" />' +
        '<label class="main-answer" for="answer-' + counter + '"><img class="main-answer-preview" src="' + it.image.url + '">' + it.title + '</label>' +
        '</div>';
    }

    return answer;
  }

  getMarkup() {
    return `<section class="main main--level main--level-artist">
        <div class="main-wrap">
          <div class="main-timer"></div>
          <h2 class="title main-title">${this.question.question}</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${this.getAnswers(this.question.answers)}
          </form>
        </div>
      </section>`;
  }

  bindHandlers() {
    let that = this;
    this.actionBtn = this._elem.querySelector('.main-list');

    let elemToPastBtn = this._elem.querySelector('.player-wrapper');

    player(elemToPastBtn, this.question.src, false, true);

    this.actionBtn.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('main-answer-r')) {

        let arrOfAnswers = Array.from(that.question.answers);
        let answers = arrOfAnswers[evt.target.value - 1];

        that._onAnswer(answers);
      }
    });
  }
}
