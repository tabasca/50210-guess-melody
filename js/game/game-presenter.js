import GameModel from './game-model';
import GenreQuestionView from './genre-question-view';
import ArtistQuestionView from './artist-question-view';
import Application from './game-view';


class GamePresenter {

  restart() {

    GameModel.restart();

    this.startGame();
  }

  startGame() {

    this.changeView();
    this.renderView();

  }

  changeView() {

    let currentQuestion = GameModel.questions[GameModel.state.question];
    let currentQuestionType = currentQuestion.type.toLowerCase();

    if (currentQuestionType === 'artist') {
      this.content = new ArtistQuestionView(currentQuestion);
    } else if (currentQuestionType === 'genre') {
      this.content = new GenreQuestionView(currentQuestion);
    }

    if (GameModel.state.question === 0) {
      GameModel.toggleTimer(GameModel.state.time);
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
        arrOfAnswers.push(GameModel.checkIfAnswerIsCorrect(answer));
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

      Application.showStats(GameModel.results);

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
