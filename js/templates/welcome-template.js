import getElementFromTemplate from '../add-template';
import {nextQuestion} from '../game';

const logo = '<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>';

export default (data) => {
  const content = `<section class="main main--welcome">
        ${logo}
        <button class="main-play">Начать игру</button>
        <h2 class="title">${data.title}</h2>
        <p class="text main-text">${data.text}</p>
      </section>`;

  let elem = getElementFromTemplate(content);

  let actionBtn = elem.querySelector('.main-play');

  actionBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    nextQuestion();
  });

  return elem;
};
