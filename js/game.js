import questions from './data/questions';
import getArtistTemplate from './templates/artist-template';
import getGenreTemplate from './templates/genre-template';
import getResultTemplate from './templates/result-template';
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

let result = {
  title: 'Вы настоящий меломан!',
  stats: {
    time: 0,
    score: 0,
    percent: 0
  }
};

let stateToAssign = {};
let currentPlayerStats = {};
let newResult = {};

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

export const collectStats = (currentStats) => {

  if (typeof currentStats !== 'object') {
    throw new RangeError('globalStats must be an object');
  }
  currentPlayerStats.time = currentStats.time;
  currentPlayerStats.score = currentStats.score;

};

export const calculateStats = (currentStats, stats) => {

  if (typeof currentStats.time !== 'number') {
    throw new RangeError('currentsStats.time must be a number');
  }

  let positionForUsersStats = 0;

  for (let i = 0; i < stats.length; i++) {
    if (stats[i].score <= currentStats.score) {
      if (stats[i].time >= currentStats.time) {
        positionForUsersStats = i;
        break;
      }
    } else {
      positionForUsersStats = stats.length;
    }
  }

  stats.splice(positionForUsersStats, 0, currentStats);

  newResult.stats.time = parseFloat(currentStats.time / 60).toFixed(2);
  newResult.stats.score = currentStats.score;
  newResult.stats.percent = Math.floor(((stats.length - (positionForUsersStats + 1)) / stats.length) * 100);

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
  newResult = completeAssign({}, result);

  renderScreen(screen);
};

export const nextQuestion = (answers) => {

  let currentQuestion;
  let currentQuestionType;
  let isAnswerCorrect = false;
  let arrOfAnswers = [];

  if (stateToAssign.question === 0) {
    toggleTimer(stateToAssign.time);
  }

  if (stateToAssign.question > 0) {

    if (answers.length) {
      answers.forEach(function (answer) {
        arrOfAnswers.push(checkIfAnswerIsCorrect(answer));
      });

      let areAnswersIncorrect = arrOfAnswers.find(function (answer) {
        return answer === false;
      });

      isAnswerCorrect = areAnswersIncorrect === undefined;

    } else {
      isAnswerCorrect = checkIfAnswerIsCorrect(answers);
    }

    if (isAnswerCorrect) {
      stateToAssign.score += 1;
    }

    setLives(stateToAssign, isAnswerCorrect);
  }

  if (stateToAssign.question >= questions.length || stateToAssign.lives < 1) {

    let staticStats = globalStats.slice(0);

    let time = timer();

    stateToAssign.time = time;

    toggleTimer(0);

    collectStats(stateToAssign);
    calculateStats(currentPlayerStats, staticStats);

    screenToRender = getResultTemplate(newResult);
  } else {
    currentQuestion = questions[stateToAssign.question];
    currentQuestionType = currentQuestion.type.toLowerCase();

    if (currentQuestionType === 'artist') {
      screenToRender = getArtistTemplate(currentQuestion);
    } else if (currentQuestionType === 'genre') {
      screenToRender = getGenreTemplate(currentQuestion);
    }
  }

  stateToAssign.question++;

  renderScreen(screenToRender);

};

