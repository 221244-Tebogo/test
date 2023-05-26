import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ launchData }) => {
  // Extracting necessary data from launchData
  const labels = launchData.map((item) => item.mission_name);
  const prices = launchData.map((item) => item.launch_price);
  const years = launchData.map((item) => item.launch_year);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Compare Price',
        data: prices,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(83, 104, 125, 0.2)',
          'rgba(159, 123, 159, 0.2)',
          // if needed more colours can be added here to style the chart
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(83, 104, 125, 1)',
          'rgba(159, 123, 159, 1)',
          // more colours can be added here
        ],
        borderWidth: 1,
        width={150} height ={159},
      },
    ],
  };

  useEffect(() => {
    // Registering required chart elements and plugins
    ChartJS.register(ArcElement, Tooltip, Legend);
  }, []);

  return <Doughnut data={data} />;
};

export default DonutChart;
