export class Component {
	constructor(id) {
		this.$el = document.getElementById(id);
		this.init();
	}

	init() {}

	hide() {
		this.$el.classList.add('hide');
		this.$el.classList.remove('fade');
	}

	show() {
		this.$el.classList.remove('hide');
		this.$el.classList.add('fade');
	}
	
	showMainContainer() {
		this.$el.classList.remove('main');
	}
}