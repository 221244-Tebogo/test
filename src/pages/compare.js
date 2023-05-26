import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const Compare = () => {
  const [launchData, setLaunchData] = useState([]);
  const [compareData, setCompareData] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?sort=desc')
      .then((res) => {
        const data = res.data.slice(0, 10).map((item) => ({
          id: item.id,
          category: item.category,
          title: item.title,
          description: item.description,
          price: item.price,
          image: item.image,
          sales: item.rating.count,
          stock: item.rating.count + item.rating.rate,
        }));
        setLaunchData(data);
        setCompareData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCompareData = compareData.filter((product) => product.id !== id);
    setCompareData(updatedCompareData);
    if (updatedCompareData.length < 2) {
      setShowCompare(false);
    }
  };

  const handleLoadItems = () => {
    const nextPage = Math.floor(launchData.length / 8) + 1; // Calculate the next page number
  
    axios
      .get(`https://fakestoreapi.com/products?sort=desc&page=${nextPage}`)
      .then((res) => {
        const newData = res.data.map((item) => ({
          id: item.id,
          category: item.category,
          title: item.title,
          description: item.description,
          price: item.price,
          image: item.image,
          sales: item.rating.count,
          stock: item.rating.count + item.rating.rate,
        }));
        setLaunchData((prevData) => [...prevData, ...newData]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectProduct = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleAddProduct = () => {
    const productToAdd = launchData.find((product) => product.id === parseInt(selectedProduct));
    if (productToAdd) {
      setCompareData([...compareData, productToAdd]);
      setSelectedProduct('');
      setShowCompare(true);
    }
  };

  const getChartData = () => {
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']; // Define color options
    const dataLength = compareData.length;
  
    const labels = compareData.map((product) => `${product.title} - $${product.price}`);
    const datasets = [
      {
        data: compareData.map((product) => product.price),
        backgroundColor: colors.slice(0, dataLength),
        hoverBackgroundColor: colors.slice(0, dataLength),
      },
    ];
  
    return {
      labels,
      datasets,
    };
  };
  

  return (
    <div>
      <h2 style={{ display: 'flex', alignItems: 'center' }}>
        {!showCompare && (
        <div>
          <h3>Select a product to compare:</h3>
          <select value={selectedProduct} onChange={handleSelectProduct}>
            <option value="">Select</option>
            {launchData.map((product, index) => (
              <option key={index} value={product.id}>
                {product.title}
              </option>
            ))}
          </select>
          <button onClick={handleAddProduct} disabled={!selectedProduct}>
            Add Product
          </button>
        </div>
      )}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {compareData.map((product) => (
          <div key={product.id} style={{ flex: '0 0 50%', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={product.image} alt={product.title} style={{ width: '80px', marginRight: '10px' }} />
              <div>
                <h3>{product.title}</h3>
                <p>Category: {product.category}</p>
                <p>ID: {product.id}</p>
                <p style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden' }}>
                  Description: {product.description}
                </p>
                <p>Price: ${product.price}</p>
              </div>
              {showCompare && (
                <button onClick={() => handleRemoveItem(product.id)}>Remove</button>
              )}
            </div>
            <Doughnut data={getChartData()} width={250} height={250} />
            <div>
              <p>Sales: {product.sales}</p>
              <p>Stock Available: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
      {!showCompare && (
        <div>
          <select value={selectedProduct} onChange={handleSelectProduct}>
            <option value="">Select a product</option>
            {launchData.map((product) => (
              <option key={product.id} value={product.id}>
                {product.title} - ${product.price}
              </option>
            ))}
          </select>
          <button onClick={handleAddProduct} disabled={!selectedProduct}>
            Add Product
          </button>
        </div>
      )}
    </div>
  );
};

export default Compare;
