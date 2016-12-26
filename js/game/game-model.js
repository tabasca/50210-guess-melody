import {completeAssign} from '../utils';

import {initialState, defaultResult} from '../game';
import globalStats from '../data/stats';

import timer from '../timer';

class GameModel {
  constructor(questionsArr) {
    this._questionsArr = completeAssign({}, questionsArr);
    this._state = completeAssign({}, initialState);
    this._result = completeAssign({}, defaultResult);

    this.timer = null;
  }

  get state() {
    return this._state;
  }

  get questions() {
    return this._questionsArr;
  }

  get results() {
    return this._result;
  }

  toggleTimer(time) {
    let cb = function () {

    };
    this.timer = timer(time, cb);
  }

  setLives(obj, isAnswerCorrect) {

    if (!isAnswerCorrect) {
      obj.lives = obj.lives - 1;
    }

    if (obj.lives < 0 || obj.lives > 3) {
      throw new RangeError('Value should not be negative or more than 3');
    }

    return obj;

  }

  checkIfAnswerIsCorrect(answer, questionType) {

    let isCorrect = false;

    isCorrect = answer.genre === questionType ? answer.isCorrect : false;

    return isCorrect;

  }

  calculateStats(currentStats, stats) {

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

    this._result.stats.time = parseFloat(currentStats.time / 60).toFixed(2);
    this._result.stats.score = currentStats.score;
    this._result.stats.percent = Math.floor(((stats.length - (positionForUsersStats + 1)) / stats.length) * 100);

  }

  updateScore() {
    this._state.score = this._state.score + 1;
  }

  nextLevel() {
    this._state.question = this._state.question + 1;
  }

  restart() {
    this._state = completeAssign({}, initialState);
    this._result = completeAssign({}, defaultResult);
  }

  die() {
    const staticStats = globalStats.slice(0);

    this._state.time = this.timer();
    this.toggleTimer(0);

    this.calculateStats(this._state, staticStats);
  }
}

export default GameModel;
