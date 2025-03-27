import React, { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from '../Context/CartContext';


const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="flex justify-between min-h-screen bg-gray-50 p-8">
      {/* Cart Items Section */}
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty. Start shopping!</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-6 p-4 border-b border-gray-300"
              >
                <div className="flex items-center">
                  <img
                    src={item.imageUrl || "https://dummyimage.com/300x300/cccccc/ffffff.png&text=No+Image"}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md shadow-sm mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-lg">${item.price}</p>
                  </div>
                </div>
                <button
                  className="text-red-600 font-medium hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <MdDeleteForever size={40}/>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Summary Section */}
      <div className="w-1/3 ml-6 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h2>

        {cart.length > 0 && (
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-4 text-lg font-medium text-gray-700">
              <span>Total Price</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300 w-full mb-4"
              onClick={() => alert("Proceeding to checkout!")}
            >
              Proceed to Checkout
            </button>

            <div className="text-center text-gray-600 mb-4">
              <button
                className="text-gray-500 text-sm hover:text-gray-700"
                onClick={() => alert("Clearing cart!")}
              >
                Clear Cart
              </button>
            </div>

            <div className="text-center">
              <button
                className="text-blue-600 text-sm font-semibold hover:text-blue-700"
                onClick={() => alert("Continuing shopping!")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
