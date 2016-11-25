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

let renderTemplate = (index) => {
  let mainElement = document.querySelector('.main');
  mainElement.parentNode.replaceChild(slides[index], mainElement);
};

export default renderTemplate;
