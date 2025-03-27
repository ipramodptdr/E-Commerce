import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { fetchProducts } from "../api/ProductService";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products", error);
      }
    };
    loadProducts();
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      navigate('/products', { state: { filteredProducts: filtered } });
    }
  };

  return (
    <nav className="w-screen shadow-md px-4 py-3 bg-blue-600 text-white">
      <div className="container w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition duration-300">
          FlipKart
        </Link>

        {/* Search Bar */}
        <div className="flex items-center w-[600px] max-w-full bg-white rounded-lg overflow-hidden">
          <input
            className="w-full p-2 text-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for Products, Brands, and More"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-400 p-2 hover:bg-yellow-500 transition"
          >
            <IoIosSearch size={24} className="text-gray-800" />
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-8">
          <div className="flex items-center cursor-pointer">
            <Link to={"/cart"}>
              <FaRegUser size={24} />
            </Link>
          </div>
          <div className="flex items-center cursor-pointer relative">
            <Link to={"/cart"}>
              <FaCartPlus size={24} />
            </Link>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
