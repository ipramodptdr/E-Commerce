import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts || [];

  return (
    <div>
        <h2 className='text-center'>Filtered Products</h2>
        <p className='text-center'>{filteredProducts.length} Number of products found.</p>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (            
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found. Try a different search!</p>
      )}
    </div>
  );
};

export default Products;
