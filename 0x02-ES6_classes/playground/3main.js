class Currency {
	constructor(code, name) {
		this.code = code;
		this.name = name;
	}

	get code() {
		return this._code;
	}

	set code(val) {
		if (typeof val === 'string') {
			this._code = val;
		} else {
			throw new TypeError('Code must be a string');
		}
	}
	get name() {
		return this._name;
	}

	set name(val) {
		if (typeof val === 'string') {
			this._name = val;
		} else {
			throw new TypeError('Name must be a string');
		}
	}

	displayFullCurrency() {
		return `${this._name} (${this._code})`;
	}

}


const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());