import AbstractView from './view';

export default class GenreQuestionView extends AbstractView {
  constructor(data) {
    super();

    this.question = data;

    this.isValid = 'false';
    this.checkedAnswers = [];
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getAnswers(list) {
    let answer = '';
    let counter = 0;

    for (let it of list) {
      counter++;

      answer += '<div class="genre-answer">' +
        '<div class="player-wrapper"></div>' +
        '<input type="checkbox" name="answer" value="' + it.value + '" id="a-' + counter + '"><label class="genre-answer-check" for="a-' + counter + '"></label>' +
        '</div>';
    }

    return answer;
  }

  getMarkup() {
    return `<section class="main main--level main--level-genre">
        <h2 class="title">${this.question.title}</h2>
        <form class="genre">
          ${this.getAnswers(this.question.answers)}
          <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
        </form>
      </section>`;
  }

  bindHandlers() {
    let that = this;

    this.answersContainer = this._elem.querySelector('.genre');
    this.answers = this._elem.querySelectorAll('input[type="checkbox"]');
    this.actionBtn = this._elem.querySelector('.genre-answer-send');

    this.answersContainer.addEventListener('change', function (evt) {
      that.checkedAnswers = [];
      for (let it of that.answers) {
        if (it.checked) {
          that.checkedAnswers.push(it.value);
          that.isValid = 'true';
        }
      }

      if (!that.isValid) {
        that.actionBtn.setAttribute('disabled', 'disabled');
      } else {
        that.actionBtn.removeAttribute('disabled', 'disabled');
      }
    });

    this.actionBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      let arrOfAnswers = Array.from(that.question.answers);
      let answersToCheck = [];

      for (let it of that.checkedAnswers) {
        for (let answer of arrOfAnswers) {
          if (answer.value === it) {
            answersToCheck.push(answer);
          }
        }
      }

      if (answersToCheck.length < that.question.correctAnswers) {
        answersToCheck = {isCorrect: false};
      }

      for (let it of that.answers) {
        it.checked = false;
      }

      that.actionBtn.setAttribute('disabled', 'disabled');

      that._onAnswer(answersToCheck);
    });
  }
}
