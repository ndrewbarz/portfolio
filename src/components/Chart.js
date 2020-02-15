import Chart from 'chart.js';

const ctx = document.getElementById('myChart').getContext('2d');

let myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'SCSS'],
		datasets: [{
			label: 'Progress',
			data: [
				90,
				80,
				60,
				30,
				40,
				40
			],
			backgroundColor: [
				'#FF8855',
				'#65BEE4',
				'#F9DC6A',
				'rgba(97, 219, 251, 0.7)',
				'rgba(241, 80, 47, 0.7)',
				'rgba(204, 102, 153, 0.7)'
			],
			borderColor: [
				'#DD5317',
				'#2194C5',
				'#E9BC0A',
				'rgb(63, 190, 221)',
				'rgb(241, 80, 47)',
				'rgb(204, 102, 153)'
			],
			borderWidth: 1
		}]
	},
	
});

