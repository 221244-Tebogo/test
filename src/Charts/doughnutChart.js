import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ launchData }) => {
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
          // Add more colors if needed
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(83, 104, 125, 1)',
          'rgba(159, 123, 159, 1)',
          // Add more colors if needed
        ],
        borderWidth: 1,
        width={150} height ={159},
      },
    ],
  };

  useEffect(() => {
    ChartJS.register(ArcElement, Tooltip, Legend);
  }, []);

  return <Doughnut data={data} />;
};

export default DonutChart;
