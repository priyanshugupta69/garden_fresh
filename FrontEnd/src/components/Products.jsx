import React, { useEffect, useState } from 'react';
import ProductCard from './productCard.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/products');
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
    {products.map((product) => (
      <div key={product.id} className="m-4">
        <ProductCard product={product} />
      </div>
    ))}
  </div>
  );
}

export default ProductsPage;