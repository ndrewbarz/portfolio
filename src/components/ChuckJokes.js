export class Jokes {

	async getJoke() {
		const response = await fetch(`https://api.chucknorris.io/jokes/random/`);

		const data = await response.json();

		return data;
	}
}