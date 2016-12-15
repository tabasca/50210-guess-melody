import {completeAssign} from '../utils';

import {initialState, defaultResult} from '../game';
import questions from '../data/questions';
import globalStats from '../data/stats';
import welcome from '../data/welcome';

import GetWelcomeView from './welcome-view';
import GetArtistView from './artist-question-view';
import GetGenreView from './genre-question-view';
import GetResultView from './result-view';

export default class GameModel {
	constructor() {
		this._state = completeAssign({}, initialState);
		this._result = completeAssign({}, defaultResult);

		this.timer = null;
	}

	toggleTimer(time) {
		this.timer = window.initializeCountdown(time);
	}

	renderScreen(screen) {
		let appContainer = document.querySelector('.main');

		appContainer.parentNode.appendChild(screen);
		appContainer.parentNode.removeChild(appContainer);
	}

	startGame() {
		let screen = new GetWelcomeView(welcome);

		this.renderScreen(screen.elem);

		screen.model = this;
		screen.onAnswer = this.onAnswer;
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

	checkIfAnswerIsCorrect(answer) {

		if (typeof answer.isCorrect !== 'boolean' && answer.isCorrect !== null) {
			throw new RangeError('Value must be boolean or null');
		}

		return answer.isCorrect;

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

	nextQuestion(screen, answers) {

		screen.model = this;
		screen.onAnswer = this.onAnswer;

		let currentQuestion;
		let currentQuestionType;
		let isAnswerCorrect = false;
		let arrOfAnswers = [];
		let view = '';

		let that = this;

		if (this._state.question === 0) {
			this.toggleTimer(this._state.time);
		}

		if (this._state.question > 0) {

			if (answers.length) {
				answers.forEach(function (answer) {
					arrOfAnswers.push(that.checkIfAnswerIsCorrect(answer));
				});

				let areAnswersIncorrect = arrOfAnswers.find(function (answer) {
					return !answer;
				});

				isAnswerCorrect = areAnswersIncorrect !== false;

			} else {
				isAnswerCorrect = this.checkIfAnswerIsCorrect(answers);
			}

			if (isAnswerCorrect) {
				this.updateScore();
			}

			this.setLives(this._state, isAnswerCorrect);
		}

		if (this._state.question >= questions.length || this._state.lives < 1) {

			const staticStats = globalStats.slice(0);

			this._state.time = this.timer();

			this.toggleTimer(0);
			this.calculateStats(this._state, staticStats);

			view = new GetResultView(this._result);
		} else {
			currentQuestion = questions[this._state.question];
			currentQuestionType = currentQuestion.type.toLowerCase();

			if (currentQuestionType === 'artist') {
				view = new GetArtistView(currentQuestion);
			} else if (currentQuestionType === 'genre') {
				view = new GetGenreView(currentQuestion);
			}
		}

		this.nextLevel();

		this.renderScreen(view.elem);

		view.model = this;
		view.onAnswer = this.onAnswer;
	}

	onAnswer(game, answers) {
		if (answers === null) {
			game.restart();
		} else {
			game.nextQuestion(this, answers);
		}
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

		this.startGame();
	}
}
