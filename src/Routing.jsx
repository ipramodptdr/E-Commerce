// Routing.jsx
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cart from './Components/Cart';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList';
import Products from './Components/Products';

const Routing = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditional rendering of Categories component only on home page */}
      {location.pathname === '/' && <Categories />}

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<h1 className="text-center">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default Routing;
