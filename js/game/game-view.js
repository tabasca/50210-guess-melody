import welcome from '../data/welcome';

import WelcomeView from './welcome-view';
import ResultView from './result-view';
import ErrorView from './error-view';

import gamePresenter from './game-presenter';

const renderScreen = (screen) => {
  let appContainer = document.querySelector('.main');

  appContainer.parentNode.appendChild(screen);
  appContainer.parentNode.removeChild(appContainer);
};

export default class Application {

  static showWelcome() {
    let screen = new WelcomeView(welcome);
    renderScreen(screen.elem);
  }

  static showGame() {
    gamePresenter();
  }

  static showStats(result) {
    let screen = new ResultView(result);
    renderScreen(screen.elem);
  }

  static showError() {
    let screen = new ErrorView();
    renderScreen(screen.elem);
  }
}
