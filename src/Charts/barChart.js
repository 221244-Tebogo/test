import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from 'react-chartjs-2';

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
)

const LineChart = () => {
 const [apiData, setApiData] =useState([]);
 const [categoryName, setCategoryName] = useState("Loading")
    //Below its a Variable with a limited number of 10 that will be passed  thru API

    
  const [chart, setChart] = useState([])
 const baseUrl = "https://fakestoreapi.com/products?limit=10";
  //var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  //var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";


  useEffect(() => {
    
    axios.get(baseUrl)
    .then((res) =>{
      console.log(res.data)
      setChart(res.data)
    })
  }, [])

  console.log("chart", chart);
  const data = {
    labels: ["Fjallraven - Foldsack", "Mens Casual Premium Slim Fit T-Shirts", "Mens Cotton Jacket", "Mens Casual Slim Fit"],
    datasets: [{
      label: "Products Sales",
      //data: [140, 340, 0, 0] ,
      data: chart.map(y => y.price) ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default LineChart