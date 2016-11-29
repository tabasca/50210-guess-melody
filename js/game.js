import questions from './data/questions';
import getArtistTemplate from './templates/artist-template';
import getGenreTemplate from './templates/genre-template';
import getResultTemplate from './templates/result-template';
import {result} from './data/result';

let counter = 0;

export default (screen) => {

  let currentQuestion = questions[counter];

  let screenToRender = '';

  if (screen) {
    screenToRender = screen;
  } else {
    if (currentQuestion.type.toLowerCase() === 'artist') {
      screenToRender = getArtistTemplate(currentQuestion);
    } else if (currentQuestion.type.toLowerCase() === 'genre') {
      screenToRender = getGenreTemplate(currentQuestion);
    }

    counter++;

    if (counter >= questions.length) {
      counter = 0;
      screenToRender = getResultTemplate(result);
    }

  }

  let appContainer = document.querySelector('.main');

  appContainer.parentNode.appendChild(screenToRender);
  appContainer.parentNode.removeChild(appContainer);


};
