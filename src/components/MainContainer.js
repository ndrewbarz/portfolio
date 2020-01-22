import { Component } from '../core/component';

export class MainContainerComponent extends Component {
	constructor(id) {
		super(id);
	}

	init() {
		if (localStorage.getItem('visited')) {
			this.showMainContainer();
		}
		const btn = document.querySelector('.btn');
		btn.addEventListener('click', btnClick.bind(this));
	}
}

function btnClick() {
	this.showMainContainer();
}