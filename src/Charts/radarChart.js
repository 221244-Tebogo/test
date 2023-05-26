import React, { useEffect } from 'react';
import { Chart as ChartJS, RadarController, LinearScale, PointElement, LineElement, Filler, Tooltip, RadialLinear, Legend,  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadarController,
  RadialLinear,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ launchData }) => {
  const labels = launchData.map((item) => item.mission_name);
  const prices = launchData.map((item) => item.launch_price);
  const years = launchData.map((item) => item.launch_year);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Compare Price',
        data: prices,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Year',
        data: years,
        backgroundColor: 'rgba(83, 104, 125, 0.2)',
        borderColor: 'rgba(83, 104, 125, 1)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
};

export default RadarChart;
