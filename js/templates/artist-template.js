import getElementFromTemplate from '../add-template';
import screensEngine from '../game';

const artist = {
  content: {
    title: 'Кто исполняет эту песню?',
    text: {
      a1: 'Пелагея',
      a2: 'Краснознаменная дивизия имени моей бабушки',
      a3: 'Lorde'
    }
  },
  events: {
    goTo: 2,
  }
};

const content = '<section class="main main--level main--level-artist">' +
  '<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">' +
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
  '</svg><div class="main-wrap">' +
  '<div class="main-timer"></div>' +
  '<h2 class="title main-title">' + artist.content.title + '</h2>' +
  '<div class="player-wrapper"></div>' +
  '<form class="main-list">' +
  '<div class="main-answer-wrapper">' +
  '<input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />' +
  '<label class="main-answer" for="answer-1"><img class="main-answer-preview" src="">' + artist.content.text.a1 + '</label>' +
  '</div>' +
  '<div class="main-answer-wrapper">' +
  '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />' +
  '<label class="main-answer" for="answer-2"><img class="main-answer-preview" src="">' + artist.content.text.a2 + '</label>' +
  '</div>' +
  '<div class="main-answer-wrapper">' +
  '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />' +
  '<label class="main-answer" for="answer-2"><img class="main-answer-preview" src="">' + artist.content.text.a3 + '</label>' +
  '</div>' +
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
