// quickchart-js https://github.com/typpo/quickchart-js

const QuickChart = require('quickchart-js');

const chart = new QuickChart();

chart.setWidth(500)
chart.setHeight(300);

chart.setConfig(DEFAULT_COLORS = ['rgba(255, 26, 104, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)','rgba(0, 0, 0, 0.2)'],
DEFAULT_BORDER_COLORS = ['rgba(255, 26, 104, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(0, 0, 0, 1)'],
getTotal = function(myChart) {
	var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return `Total: ${sum}`;
},
{
  type: 'doughnut',
  data: {
    labels: ['Curso em Vídeo: Python', 'Curso em Vídeo: JavaScript', 'DIO: Spread Fullstack Developer', 'DIO: Órbi Web Games Developer'],
    datasets: [{
      data: [120, 40, 98, 63],
      backgroundColor: DEFAULT_COLORS,
      borderColor: DEFAULT_BORDER_COLORS,
      borderWidth: 4,
      borderRadius: 10,
			label: 'Dataset 1'
    }]
  },
  options: {
    plugins: {
      datalabels: {
        display: true,
        backgroundColor: 'white',
        borderRadius: 4,
        font: {
          color: 'black',
          weight: 'bold',
          size: 15,
        }
      },
      doughnutlabel: {
        labels: [{
          text: getTotal,
          font: {
            size: 22,
            weight: 'bold'
          }
        }, {
          text: 'horas',
          font: {
            size: 19,
          }
        }]
      },
    }
  }
});

// Print the chart URL
console.log(chart.getUrl());



// Or write it to a file
chart.toFile('chart.png');