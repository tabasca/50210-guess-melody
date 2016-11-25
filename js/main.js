import {welcomeTemplate, artistTemplate, genreTemplate, resultTemplate} from './htmlTemplates';

(function () {

  let slides = [
    welcomeTemplate,
    artistTemplate,
    genreTemplate,
    resultTemplate
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);

    if (index >= 3) {
      current = -1;
    }

  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37: current--; break;
      case 39: current++; break;
    }

    select(current);
  };

  select(0);
})();

