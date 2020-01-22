import Chart from 'chart.js';

const ctx = document.getElementById('myChart').getContext('2d');

let myDoughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Webpack'],
		datasets: [{
			label: 'Progress',
			data: [
				90,
				80,
				60,
				40,
				40
			],
			backgroundColor: [
				'#FF8855',
				'#65BEE4',
				'#F9DC6A',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'#DD5317',
				'#2194C5',
				'#E9BC0A',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	
});

