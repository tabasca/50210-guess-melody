import getElementFromTemplate from '../add-template';
import {nextQuestion} from '../game';

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

export default (data) => {
  const content = `<section class="main main--level main--level-genre">
        <h2 class="title">${data.title}</h2>
        <form class="genre">
          ${getAnswers(data.answers)}
          <button class="genre-answer-send" type="submit" disabled="disabled">Ответить</button>
        </form>
      </section>`;

  let elem = getElementFromTemplate(content);

  let actionBtn = elem.querySelector('.genre-answer-send');

  let answers = elem.querySelectorAll('input[type="checkbox"]');
  let answersContainer = elem.querySelector('.genre');

  let isValid = 'false';

  let checkedAnswers = [];

  answersContainer.addEventListener('change', function (evt) {
    checkedAnswers = [];
    for (let it of answers) {
      if (it.checked) {
        checkedAnswers.push(it.value);
        isValid = 'true';
      }
    }

    if (!isValid) {
      actionBtn.setAttribute('disabled', 'disabled');
    } else {
      actionBtn.removeAttribute('disabled', 'disabled');
    }
  });


  actionBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    let arrOfAnswers = Array.from(data.answers);
    let answersToCheck = [];

    for (let it of checkedAnswers) {
      for (let answer of arrOfAnswers) {
        if (answer.value === it) {
          answersToCheck.push(answer);
        }
      }
    }

    if (answersToCheck.length < data.correctAnswers) {
      answersToCheck = {isCorrect: false};
    }

    for (let it of answers) {
      it.checked = false;
    }

    actionBtn.setAttribute('disabled', 'disabled');

    nextQuestion(answersToCheck);
  });

  return elem;
};

