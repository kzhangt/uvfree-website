class faq {
	static #nextId = 1;
	#id;
	#question;
	#answer;

	constructor(question, answer) {
		this.#id = faq.#nextId++;
		this.#question = question;
		this.#answer = answer;
	}

	get id() {
		return this.#id;
	}

	get question() {
		return this.#question;
	}

	set question(question) {
		this.#question = question;
	}

	get answer() {
		return this.#answer;
	}

	set answer(answer) {
		this.#answer = answer;
	}
}

export default faq;