import Model from './game-model';
import GenreQuestionView from './genre-question-view';
import ArtistQuestionView from './artist-question-view';
import Application from './game-view';

let GameModel;

let currentQuestion;
let currentQuestionType;

class GamePresenter {

  restart() {

    GameModel = new Model(Application.data);
    GameModel.restart();

    this.startGame();
  }

  startGame() {

    this.changeView();
    this.renderView();

  }

  changeView() {

    currentQuestion = GameModel.questions[GameModel.state.question];
    currentQuestionType = currentQuestion.type.toLowerCase();

    if (currentQuestionType === 'artist') {
      this.content = new ArtistQuestionView(currentQuestion);
    } else if (currentQuestionType === 'genre') {
      this.content = new GenreQuestionView(currentQuestion);
    }

    if (GameModel.state.question === 0) {
      GameModel.toggleTimer(120);
    }

    this.content.onAnswer = this.onAnswer.bind(this);

  }

  renderView() {

    let appContainer = document.querySelector('.main');

    appContainer.parentNode.appendChild(this.content.elem);
    appContainer.parentNode.removeChild(appContainer);

  }

  onAnswer(answers) {

    let isAnswerCorrect = false;
    let arrOfAnswers = [];

    if (answers.length) {
      answers.forEach(function (answer) {
        arrOfAnswers.push(GameModel.checkIfAnswerIsCorrect(answer, currentQuestionType));
      });

      let areAnswersIncorrect = arrOfAnswers.find(function (answer) {
        return !answer;
      });

      isAnswerCorrect = areAnswersIncorrect !== false;

    } else {

      isAnswerCorrect = GameModel.checkIfAnswerIsCorrect(answers);

    }

    if (isAnswerCorrect) {

      GameModel.updateScore();

    }

    GameModel.setLives(GameModel.state, isAnswerCorrect);

    if (GameModel.state.question >= GameModel.questions.length || GameModel.state.lives < 1) {

      GameModel.die();

      window.addEventListener('resultsSuccessfullyCalculated', function () {
        Application.showStats(GameModel.results);
      });

    } else {

      GameModel.nextLevel();

      this.changeView();
      this.renderView();

    }

  }

}

const game = new GamePresenter();

export default () => {

  game.restart();

};
