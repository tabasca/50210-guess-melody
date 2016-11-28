import getElementFromTemplate from '../add-template';
import screensEngine from '../game';

const answers = new Set([
  {image: '', text: 'Пелагея'},
  {image: '', text: 'Краснознаменная дивизия имени моей бабушки'},
  {image: '', text: 'Lorde'}
]);

const artist = {
  title: 'Кто исполняет эту песню?',
  text: answers,
  events: {
    goTo: 2,
  }
};

const getAnswers = (list) => {
  let answer = '';
  let counter = 0;

  for (let it of list) {
    counter++;

    answer += '<div class="main-answer-wrapper">' +
      '<input class="main-answer-r" type="radio" id="answer-' + counter + '" name="answer" value="val-' + counter + '" />' +
      '<label class="main-answer" for="answer-' + counter + '"><img class="main-answer-preview" src="' + it.image + '">' + it.text + '</label>' +
      '</div>';
  }

  return answer;
};

const timer = '<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">' +
  '<circle ' +
  'cx="390" cy="390" r="370" ' +
  'class="timer-line" ' +
  'style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center">' +
  '</circle>' +
  '<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">' +
  '<span class="timer-value-mins">02</span><!--' +
  '--><span class="timer-value-dots">:</span><!--' +
  '--><span class="timer-value-secs">00</span>' +
  '</div>' +
  '</svg>';

const content = '<section class="main main--level main--level-artist">' +
  timer +
  '<div class="main-wrap">' +
  '<div class="main-timer"></div>' +
  '<h2 class="title main-title">' + artist.title + '</h2>' +
  '<div class="player-wrapper"></div>' +
  '<form class="main-list">' +
  getAnswers(artist.text) +
  '</form>' +
  '</div>' +
  '</section>';

const artistElem = getElementFromTemplate(content);

let actionBtn = artistElem.querySelector('.main-list');

actionBtn.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('main-answer')) {
    screensEngine(artist.events.goTo);
  }
});

export default artistElem;
