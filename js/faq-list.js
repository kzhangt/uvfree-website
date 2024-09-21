import faq from './faq.js';

class faqList {
	#faqs = [];

	addFaq(question, answer) {
		this.#faqs.push(new faq(question, answer));
	}

	get faqs() {
		return this.#faqs;
	}
}

export default faqList;