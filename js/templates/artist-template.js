import getElementFromTemplate from '../add-template';
import {screensEngine} from '../game';

const getAnswers = (list) => {
  let answer = '';
  let counter = 0;

  for (let it of list) {
    counter++;

    answer += '<div class="main-answer-wrapper">' +
      '<input class="main-answer-r" type="radio" id="answer-' + counter + '" name="answer" value="' + counter + '" />' +
      '<label class="main-answer" for="answer-' + counter + '"><img class="main-answer-preview" src="' + it.image + '">' + it.text + '</label>' +
      '</div>';
  }

  return answer;
};

export default (data) => {
  const content = `<section class="main main--level main--level-artist">
        <div class="main-wrap">
          <div class="main-timer"></div>
          <h2 class="title main-title">${data.title}</h2>
          <div class="player-wrapper"></div>
          <form class="main-list">
            ${getAnswers(data.answers)}
          </form>
        </div>
      </section>`;

  let elem = getElementFromTemplate(content);

  let actionBtn = elem.querySelector('.main-list');

  actionBtn.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('main-answer-r')) {

      let arrOfAnswers = Array.from(data.answers);
      let isAnswerCorrect = arrOfAnswers[evt.target.value - 1].isCorrect;

      screensEngine(false, isAnswerCorrect);
    }
  });

  return elem;
};
