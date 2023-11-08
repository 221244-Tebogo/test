import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const Compare = () => {
  // State variables
  const [launchData, setLaunchData] = useState([]); // Stores the initial launch data
  const [compareData1, setCompareData1] = useState([]); // Stores the data for products being compared
  const [compareData2, setCompareData2] = useState([]); // Stores the data for products being compared
  const [showData1, setShowData1] = useState([]); // Stores the data for products being compared
  const [showData2, setShowData2] = useState([]); // Stores the data for products being compared
  const [showCompare, setShowCompare] = useState(false); // Controls whether the comparison section is shown
  const [selectedProduct, setSelectedProduct] = useState(''); // Tracks the selected product for comparison
  const [selectedProduct1, setSelectedProduct1] = useState(''); // Tracks the selected product for comparison
  const [selectedProduct2, setSelectedProduct2] = useState(''); // Tracks the selected product for comparison

  useEffect(() => {
    // Fetch initial launch data from API
    axios
      .get('https://fakestoreapi.com/products?sort=desc')
      .then((res) => {
        // Process the received data
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
        setCompareData1(data); // Set the initial compareData to the fetched data
        setCompareData2(data); // Set the initial compareData to the fetched data
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveItem1 = (id) => {
    // Remove a product from the compareData
    const updatedCompareData = compareData1.filter(
      (product) => product.id !== id
    );
    setCompareData1(updatedCompareData);
    if (updatedCompareData.length < 2) {
      setShowCompare(false); // Hide the comparison section if less than 2 products remain
    }
  };
  const handleRemoveItem2 = (id) => {
    // Remove a product from the compareData
    const updatedCompareData = compareData2.filter(
      (product) => product.id !== id
    );
    setCompareData2(updatedCompareData);
    if (updatedCompareData.length < 2) {
      setShowCompare(false); // Hide the comparison section if less than 2 products remain
    }
  };

  const handleLoadItems = () => {
    // Load additional items for comparison
    const nextPage = Math.floor(launchData.length / 8) + 1; // Calculate the next page number

    axios
      .get(`https://fakestoreapi.com/products?sort=desc&page=${nextPage}`)
      .then((res) => {
        // Process the received data
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
        setLaunchData((prevData) => [...prevData, ...newData]); // Append new data to launchData
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectProduct = (event) => {
    // Handle selection of a product for comparison

    setSelectedProduct(event.target.value);
  };
  const handleSelectProduct1 = (event) => {
    const show = compareData1.filter((item) => item.id == event.target.value);
    // Handle selection of a product for comparison
    setSelectedProduct1(event.target.value);
    setShowData1(show);
  };
  const handleSelectProduct2 = (event) => {
    const show = compareData2.filter((item) => item.id == event.target.value);
    // Handle selection of a product for comparison
    setSelectedProduct2(event.target.value);
    setShowData2(show);
  };

  const handleAddProduct = () => {
    // Add a selected product to the compareData
    const productToAdd = launchData.find(
      (product) => product.id === parseInt(selectedProduct)
    );
    if (productToAdd) {
      setCompareData1([...compareData1, productToAdd]);
      setSelectedProduct('');
      setShowCompare(true);
    }
  };

  const getChartData1 = () => {
    // Prepare chart data for the Doughnut component
    const colors = ['#FF6384', '#36A2EB', '#FFCE56']; // Define color options
    const dataLength = compareData1.length;

    const labels = ['Price', 'Stock Level', 'Sales'];
    const datasets = [
      {
        data: [showData1[0].price, showData1[0].stock, showData1[0].sales],
        backgroundColor: colors.slice(0, dataLength),
        hoverBackgroundColor: colors.slice(0, dataLength),
      },
    ];

    return {
      labels,
      datasets,
    };
  };
  const getChartData2 = () => {
    // Prepare chart data for the Doughnut component
    const colors = ['#FF6384', '#36A2EB', '#FFCE56']; // Define color options
    const dataLength = compareData1.length;

    const labels = ['Price', 'Stock Level', 'Sales'];
    const datasets = [
      {
        data: [showData2[0].price, showData2[0].stock, showData2[0].sales],
        backgroundColor: colors.slice(0, dataLength),
        hoverBackgroundColor: colors.slice(0, dataLength),
      },
    ];

    return {
      labels,
      datasets,
    };
  };
  const getChartData = () => {
    // Prepare chart data for the Doughnut component
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']; // Define color options
    const dataLength = compareData1.length;

    const labels = compareData1.map(
      (product) => `${product.title} - $${product.price}`
    );
    const datasets = [
      {
        data: compareData1.map((product) => product.price),
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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* row 1 */}
      <div>
        {/* Render the product selection section */}
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
          {!showCompare && (
            <div>
              <h3>Select a product to compare:</h3>
              <select value={selectedProduct1} onChange={handleSelectProduct1}>
                <option value=''>Select</option>
                {launchData.map((product, index) => (
                  <option key={index} value={product.id}>
                    {product.title}
                  </option>
                ))}
              </select>
              <button onClick={handleAddProduct} disabled={!selectedProduct1}>
                Add Product
              </button>
            </div>
          )}
        </h2>
        {/* Render the comparison section */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {showData1.map((product) => (
            <div
              key={product.id}
              style={{ flex: '0 0 50%', marginBottom: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '80px', marginRight: '10px' }}
                />
                <div>
                  <h3>{product.title}</h3>
                  <p>Category: {product.category}</p>
                  <p>ID: {product.id}</p>
                  <p
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                    }}
                  >
                    Description: {product.description}
                  </p>
                  <p>Price: ${product.price}</p>
                  <p>Sales: {product.sales}</p>
                  <p>Stock Available: {product.stock}</p>
                </div>
                {showCompare && (
                  <button onClick={() => handleRemoveItem1(product.id)}>
                    Remove
                  </button>
                )}
              </div>
              <Doughnut data={getChartData1()} width={250} height={250} />
            </div>
          ))}
        </div>
        {/* Render the product selection section again */}
      </div>

      {/* row 2 */}
      <div>
        {/* Render the product selection section */}
        <h2 style={{ display: 'flex', alignItems: 'center' }}>
          {!showCompare && (
            <div>
              <h3>Select a product to compare:</h3>
              <select value={selectedProduct2} onChange={handleSelectProduct2}>
                <option value=''>Select</option>
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
        {/* Render the comparison section */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {showData2.map((product) => (
            <div
              key={product.id}
              style={{ flex: '0 0 50%', marginBottom: '20px' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '80px', marginRight: '10px' }}
                />
                <div>
                  <h3>{product.title}</h3>
                  <p>Category: {product.category}</p>
                  <p>ID: {product.id}</p>
                  <p
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      overflow: 'hidden',
                    }}
                  >
                    Description: {product.description}
                  </p>
                  <p>Price: ${product.price}</p>
                  <p>Sales: {product.sales}</p>
                  <p>Stock Available: {product.stock}</p>
                </div>
                {showCompare && (
                  <button onClick={() => handleRemoveItem1(product.id)}>
                    Remove
                  </button>
                )}
              </div>
              <Doughnut data={getChartData2()} width={250} height={250} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
