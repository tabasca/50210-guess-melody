import getElementFromTemplate from '../add-template';
import renderTemplate from '../render-template';

const genreTemplate = getElementFromTemplate('<h2 class="title">Выберите инди-рок треки</h2>\n' +
  '<form class="genre">\n' +
  '<div class="genre-answer">\n' +
  '<div class="player-wrapper"></div>\n' +
  '<input type="checkbox" name="answer" value="answer-1" id="a-1">\n' +
  '<label class="genre-answer-check" for="a-1"></label>\n' +
  '</div>\n' +
  '<div class="genre-answer">\n' +
  '<div class="player-wrapper"></div>\n' +
  '<input type="checkbox" name="answer" value="answer-1" id="a-2">\n' +
  '<label class="genre-answer-check" for="a-2"></label>\n' +
  '</div>\n' +
  '<div class="genre-answer">\n' +
  '<div class="player-wrapper"></div>\n' +
  '<input type="checkbox" name="answer" value="answer-1" id="a-3">\n' +
  '<label class="genre-answer-check" for="a-3"></label>\n' +
  '</div>\n' +
  '<div class="genre-answer">\n' +
  '<div class="player-wrapper"></div>\n' +
  '<input type="checkbox" name="answer" value="answer-1" id="a-4">\n' +
  '<label class="genre-answer-check" for="a-4"></label>\n' +
  '</div>\n' +
  '<button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>\n' +
  '</form>', 'main--level', 'main--level-genre');

let body = document.querySelector('body');

body.addEventListener('click', function (evt) {

  let checkedAnswers = document.querySelectorAll('input[type="checkbox"]');
  let submitBtn = document.querySelector('.genre-answer-send');

  if (submitBtn) {

    let disableBtn = true;

    for (let i = 0; i < checkedAnswers.length; i++) {
      if (checkedAnswers[i].checked === true) {
        submitBtn.removeAttribute('disabled', 'disabled');
        disableBtn = false;
      }
    }

    if (disableBtn) {
      submitBtn.setAttribute('disabled', 'disabled');
    } else {
      submitBtn.removeAttribute('disabled', 'disabled');
    }
  }

  if (evt.target.classList.contains('genre-answer-send')) {
    evt.preventDefault();

    renderTemplate(3);
  }
});

export default genreTemplate;
