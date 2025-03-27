import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useProducts from '../hooks/UseProducts';
import Loader from './Loader';
import ProductCard from './ProductCard';

const ErrorMessage = ({ message }) => (
  <div className="text-red-500 text-center my-4">
    Error: {message}
  </div>
);

const ProductList = () => {
  const location = useLocation();
  const filteredProducts = location.state?.filteredProducts;
  const { products, loading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  // Determine which products to display
  const displayProducts = filteredProducts?.length ? filteredProducts : products;

  if (displayProducts.length === 0) {
    return <p className="text-center my-8">No products found. Please try a different search!</p>;
  }

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = displayProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);

  return (
    <div>
      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      {displayProducts.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
