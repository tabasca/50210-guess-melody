import {initialState, setLives, nextQuestion, toggleTimer} from '../game';

export default class GameModel {
	constructor(state = initialState) {
		this._state = state;
	}

	get state() {
		return this._state;
	}

	tick(time) {
		this._state = toggleTimer(time);
	}

	updateScore() {
		this._state = this._state.score++;
	}

	nextLevel() {
		this._state = this._state.question++;
	}

	restart() {
		this._state = initialState;
	}
}