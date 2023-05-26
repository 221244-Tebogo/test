import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';

// Registering Chart.js elements and plugins
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=10");
        const data = response.data.map((product) => ({
          label: product.title,
          data: [product.price],
          fill: false,
          borderColor: `rgba(255, ${Math.floor(Math.random() * 256)}, 132, 1)`,
        }));
        setChartData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Function to calculate price differences between consecutive data points
  const calculatePriceDifferences = (data) => {
    const priceDifferences = [];
    for (let i = 1; i < data.length; i++) {
      const currentPrice = data[i].data[0];
      const previousPrice = data[i - 1].data[0];
      const difference = currentPrice - previousPrice;
      priceDifferences.push(difference);
    }
    return priceDifferences;
  };

  // Chart data and options
  const data = {
    labels: chartData.map((product) => product.label),
    datasets: [
      {
        label: 'Sales',
        data: chartData.map((product) => product.data[0]),
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Price Differences',
        data: calculatePriceDifferences(chartData),
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  return (
    <div>
      <Line data={data} height={300} options={options} />
    </div>
  );
};

export default LineChart;
