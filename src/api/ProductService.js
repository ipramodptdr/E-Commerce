
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    console.log('Fetched products:', response.data); // Log the fetched products
    return response.data;
    
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
