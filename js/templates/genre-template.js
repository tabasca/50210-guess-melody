import getElementFromTemplate from '../add-template';
import ScreensEngine from '../game';

const genre =  {
  content: {
    title: 'Выберите инди-рок треки',
    value: {
      a1: 'answer-1',
      a2: 'answer-2',
      a3: 'answer-3',
      a4: 'answer-4'
    }
  },
  state: {
    isValid: 'true'
  },
  events: {
    goTo: 3
  }
};

const content = '<section class="main main--level main--level-genre">' +
  '<h2 class="title">' + genre.content.title + '</h2>' +
  '<form class="genre">' +
  '<div class="genre-answer">' +
  '<div class="player-wrapper"></div>' +
  '<input type="checkbox" name="answer" value="' + genre.content.value.a1 +'" id="a-1"><label class="genre-answer-check" for="a-1"></label>' +
  '</div>' +
  '<div class="genre-answer">' +
  '<div class="player-wrapper"></div>' +
  '<input type="checkbox" name="answer" value="' + genre.content.value.a2 +'" id="a-2"><label class="genre-answer-check" for="a-2"></label>' +
  '</div>' +
  '<div class="genre-answer">' +
  '<div class="player-wrapper"></div>' +
  '<input type="checkbox" name="answer" value="' + genre.content.value.a3 +'" id="a-3"><label class="genre-answer-check" for="a-3"></label>' +
  '</div>' +
  '<div class="genre-answer">' +
  '<div class="player-wrapper"></div>' +
  '<input type="checkbox" name="answer" value="' + genre.content.value.a4 +'" id="a-4"><label class="genre-answer-check" for="a-4"></label>' +
  '</div>' +
  '<button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>' +
  '</form>' +
  '</section>';

const genreElem = getElementFromTemplate(content);

let actionBtn = genreElem.querySelector('.genre-answer-send');

let answers = genreElem.querySelectorAll('input[type="checkbox"]');
let answersContainer = genreElem.querySelector('.genre');

answersContainer.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('genre-answer-check')) {
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].checked === true) {
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

  for (let i = 0; i < answers.length; i++) {
    answers[i].checked = false;
  }

  ScreensEngine(genre.events.goTo);
});

export default genreElem;
