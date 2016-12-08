import questions from './data/questions';
import getArtistTemplate from './templates/artist-template';
import getGenreTemplate from './templates/genre-template';
import getResultTemplate from './templates/result-template';
import {result} from './data/result';
import globalStats from './data/stats';
import {completeAssign} from './utils';

let screenToRender = '';
let timer = '';

let initialState = {
  lives: 3,
  question: 0,
  time: 120,
  score: 0
};

let stateToAssign = {};

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

export const calculateStats = (currentStats, stats) => {

  if (typeof stats !== 'object') {
    throw new RangeError('globalStats must be an object');
  }

  let currentPlayerStats = {};
  currentPlayerStats.time = currentStats.time;
  currentPlayerStats.score = currentStats.score;

  stats.push(currentPlayerStats);
};

let toggleTimer = (time) => {
  timer = window.initializeCountdown(time);
};

let renderScreen = (screen) => {
  let appContainer = document.querySelector('.main');

  appContainer.parentNode.appendChild(screen);
  appContainer.parentNode.removeChild(appContainer);
};

export const startGame = (screen) => {
  stateToAssign = completeAssign({}, initialState);

  renderScreen(screen);
};

export const nextQuestion = (answers) => {

  let currentQuestion = questions[stateToAssign.question];
  let currentQuestionType = currentQuestion.type.toLowerCase();

  if (currentQuestionType === 'artist') {
    screenToRender = getArtistTemplate(currentQuestion);
  } else if (currentQuestionType === 'genre') {
    screenToRender = getGenreTemplate(currentQuestion);
  }

  if (stateToAssign.question === 0) {
    toggleTimer(stateToAssign.time);
  }

  let isAnswerCorrect = false;
  let arrOfAnswers = [];

  if (stateToAssign.question > 1) {

    if (answers.length) {
      answers.forEach(function (answer) {
        arrOfAnswers.push(checkIfAnswerIsCorrect(answer));
      });
      for (let it of arrOfAnswers) {
        if (it === false) {
          isAnswerCorrect = false;
          break;
        }

        isAnswerCorrect = true;
      }
    } else {
      isAnswerCorrect = checkIfAnswerIsCorrect(answers);
    }


    if (isAnswerCorrect) {
      stateToAssign.score += 1;
    }

    setLives(stateToAssign, isAnswerCorrect);
  }

  if (stateToAssign.question >= questions.length || stateToAssign.lives < 1) {

    timer();

    toggleTimer(0);

    calculateStats(stateToAssign, globalStats);

    screenToRender = getResultTemplate(result);
  }

  stateToAssign.question++;

  renderScreen(screenToRender);

};

