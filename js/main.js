import 'whatwg-fetch';

import Application from './game/game-view';

(function () {

  window.fetch('https://intensive-ecmascript-server-nnpnvhhedl.now.sh/guess-melody/questions')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        Application.data = data;
        Application.showWelcome();
      })
      .catch(Application.showError());

})();

