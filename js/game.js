import questions from './data/questions';
import getArtistTemplate from './templates/artist-template';
import getGenreTemplate from './templates/genre-template';
import getResultTemplate from './templates/result-template';
import {result} from './data/result';
import {completeAssign} from './utils';

let counter = 0;
let screenToRender = '';

let initialState = {
  lives: 3,
  question: 0,
  time: 120,
  score: 0
};

let stateToAssign = completeAssign({}, initialState);

export const setLives = (obj, isAnswerCorrect) => {

  if (!isAnswerCorrect) {
    obj.lives = obj.lives - 1;
  }

  if (obj.lives < 0 || obj.lives > 3) {
    throw new RangeError('Value should not be negative or more than 3');
  }

  return obj;
};

export const checkIfAnswerIsCorrect = (answer) => {

  if (typeof answer.isCorrect !== 'boolean') {
    throw new RangeError('Value must be boolean');
  }

  return answer.isCorrect;

};

let toggleTimer = (time) => {
  window.initializeCountdown(time);
};

let renderNextQuestion = (question, isAnswerCorrect) => {
  let currentQuestionType = question.type.toLowerCase();

  if (currentQuestionType === 'artist') {
    screenToRender = getArtistTemplate(question);
  } else if (currentQuestionType === 'genre') {
    screenToRender = getGenreTemplate(question);
  }

  counter++;

  if (counter === 1) {
    toggleTimer(stateToAssign.time);
  }

  if (counter > 1) {
    setLives(stateToAssign, isAnswerCorrect);
  }

  if (counter >= questions.length || stateToAssign.lives < 1) {
    counter = 0;
    toggleTimer();

    screenToRender = getResultTemplate(result);
  }


};

export const screensEngine = (screen, isAnswerCorrect) => {

  let currentQuestion = questions[counter];

  if (screen) {
    screenToRender = screen;
  } else {

    renderNextQuestion(currentQuestion, isAnswerCorrect);

  }

  let appContainer = document.querySelector('.main');

  appContainer.parentNode.appendChild(screenToRender);
  appContainer.parentNode.removeChild(appContainer);

};

