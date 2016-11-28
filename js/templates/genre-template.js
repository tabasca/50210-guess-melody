import getElementFromTemplate from '../add-template';
import screensEngine from '../game';

const tracks = new Set([
  {value: 'answer-1'},
  {value: 'answer-2'},
  {value: 'answer-3'},
  {value: 'answer-4'}
]);

const genre = {
  title: 'Выберите инди-рок треки',
  answer: tracks,
  state: {
    isValid: 'true'
  },
  events: {
    goTo: 3
  }
};

const getAnswers = (list) => {
  let answer = '';
  let counter = 0;

  for (let it of list) {
    counter++;

    answer += '<div class="genre-answer">' +
      '<div class="player-wrapper"></div>' +
      '<input type="checkbox" name="answer" value="' + it.value + '" id="a-' + counter + '"><label class="genre-answer-check" for="a-' + counter + '"></label>' +
      '</div>';
  }

  return answer;
};

const content = '<section class="main main--level main--level-genre">' +
  '<h2 class="title">' + genre.title + '</h2>' +
  '<form class="genre">' +
  getAnswers(genre.answer) +
  '<button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>' +
  '</form>' +
  '</section>';

const genreElem = getElementFromTemplate(content);

let actionBtn = genreElem.querySelector('.genre-answer-send');

let answers = genreElem.querySelectorAll('input[type="checkbox"]');
let answersContainer = genreElem.querySelector('.genre');

answersContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('genre-answer-check')) {
    for (let it of answers) {
      if (it.checked === true) {
        actionBtn.removeAttribute('disabled', 'disabled');
        genre.state.isValid = 'true';
      }
    }

    if (genre.state.isValid === 'false') {
      actionBtn.setAttribute('disabled', 'disabled');
    } else {
      actionBtn.removeAttribute('disabled', 'disabled');
    }
  }

});


actionBtn.addEventListener('click', function (evt) {
  evt.preventDefault();

  for (let it of answers) {
    it.checked = false;
  }

  actionBtn.setAttribute('disabled', 'disabled');

  screensEngine(genre.events.goTo);
});

export default genreElem;
