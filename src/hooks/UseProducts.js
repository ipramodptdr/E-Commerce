import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const useProducts = () => {
  return useContext(ProductContext);
};

export default useProducts;
