import getElementFromTemplate from '../add-template';
import renderTemplate from '../render-template';

const artistTemplate = getElementFromTemplate('<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">\n' +
  '<circle\n' +
  'cx="390" cy="390" r="370"\n' +
  'class="timer-line"\n' +
  'style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>\n' +
  '<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">\n' +
  '<span class="timer-value-mins">02</span><!--\n' +
  '--><span class="timer-value-dots">:</span><!--\n' +
  '--><span class="timer-value-secs">00</span>\n' +
  '</div>\n' +
  '</svg>\n' +
  '<div class="main-wrap">\n' +
  '<div class="main-timer"></div>\n' +
  '<h2 class="title main-title">Кто исполняет эту песню?</h2>\n' +
  '<div class="player-wrapper"></div>\n' +
  '<form class="main-list">\n' +
  '<div class="main-answer-wrapper">\n' +
  '<input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />\n' +
  '<label class="main-answer" for="answer-1">\n' +
  '<img class="main-answer-preview" src="">\n' +
  'Пелагея\n' +
  '</label>\n' +
  '</div>\n' +
  '<div class="main-answer-wrapper">\n' +
  '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />\n' +
  '<label class="main-answer" for="answer-2">\n' +
  '<img class="main-answer-preview" src="">\n' +
  'Краснознаменная дивизия имени моей бабушки\n' +
  '</label>\n' +
  '</div>\n' +
  '<div class="main-answer-wrapper">\n' +
  '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />\n' +
  '<label class="main-answer" for="answer-2">\n' +
  '<img class="main-answer-preview" src="">\n' +
  'Lorde\n' +
  '</label>\n' +
  '</div>\n' +
  '</form>\n' +
  '</div>', 'main--level-artist', 'main--level');

let body = document.querySelector('body');

body.addEventListener('click', function (evt) {

  if (evt.target.classList.contains('main-answer')) {
    renderTemplate(2);
  }
});


export default artistTemplate;
