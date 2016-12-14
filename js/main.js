import {startGame} from './game';
import getWelcomeTemplate from './templates/welcome-template';
import {welcome} from './data/welcome';

(function () {
  startGame(getWelcomeTemplate(welcome));
})();

