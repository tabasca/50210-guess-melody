import getElement from '../add-template';


export default class AbstractView {
	constructor() {
		this.model = '';
	}
	get elem() {
		if (!this._elem) {
			this._elem = getElement(this.getMarkup());
			this.bindHandlers();
		}

		return this._elem;
	}

	getMarkup() {
		throw new Error('Abstract method should be implemented');
	}

	bindHandlers() {
		// By default there is nothing to bind
	}

	unbindHandlers() {
		// By default nothing to unbind
	}
}
