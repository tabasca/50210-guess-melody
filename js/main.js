import screensEngine from './game';
import getWelcomeTemplate from './templates/welcome-template';
import {welcome} from './data/welcome';

(function () {
  screensEngine(getWelcomeTemplate(welcome));
})();

