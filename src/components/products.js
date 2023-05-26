import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

useEffect(() =>{
    //set loading to be true, this will trigger before axios calls the FakeApi 
    setLoading(true);
    axios.get({
        method:"GET",
        url: 'https://fakestoreapi.com/products',
        //set a promise and data displayed in console log
    })
    .then((res) => {
        console.log(res.data);
        setData(res.data);
    })

    //errors will be displayed on console.log instead of front page
    .catch((e) => console.log(e))
    .finally(() => setLoading(false));
}, []);

//{loading} will be displayed loading message as user is waiting for product api to
return (
    <div className='products-container'>
        {loading && (
        <div>
            {" "}
            <h3>Loading...</h3>
        </div>
        )}

    {data.map((product) => (
        <div key={product.id} className='products-card'>
            <div><img src={product.image} alt="#" /></div>
            <div className='card-description'>
            <h6>{product.title}</h6>
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Category: ${product.category}`}</h6>
    </div>
    </div>
    ))}
    </div>
  );
};

export default Products;


//backtick for ``