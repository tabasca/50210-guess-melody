import welcomeTemplate from './templates/welcome-template';
import artistTemplate from './templates/artist-template';
import genreTemplate from './templates/genre-template';
import resultTemplate from './templates/result-template';

let slides = [
  welcomeTemplate,
  artistTemplate,
  genreTemplate,
  resultTemplate
];

let ScreensEngine = (screen) => {

  let appContainer = document.querySelector('.main');
  appContainer.parentNode.replaceChild(slides[screen], appContainer);

};

export default ScreensEngine;
