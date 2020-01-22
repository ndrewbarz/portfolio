export class UI{
	constructor() {
		// this.icon = document.querySelector('.icon');
		this.joke = document.querySelector('.joke');
	}

	paint(data) {
		// this.icon.setAttribute('src', data.icon_url);
		this.joke.textContent = data.value;
	}
}