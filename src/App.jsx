// App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Routing from './Routing';
import CartProvider from './Context/CartContext';
import ProductProvider from './Context/ProductContext';

const App = () => (
  <BrowserRouter>
    <CartProvider>
      <ProductProvider>
        <Navbar />
        <Routing />
        <Footer />
      </ProductProvider>
    </CartProvider>
  </BrowserRouter>
);

export default App;
