import React from 'react';
//import Cards from '../components/cards';
import Table from '../components/table';
import FeaturedProducts from '../components/featuredProducts';
import LineChart from '../Charts/lineChart';


//Cards component will be linked to Dashboard by the map method
const Dashboard = () => {
  return (
    <div className='Dashboard'>
        <FeaturedProducts />
      <LineChart />
      <Table />
    </div>
  )
}

export default Dashboard
