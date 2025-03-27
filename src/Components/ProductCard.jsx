import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function ProductCard({ product }) {
  const imageUrl = product?.images?.[0]?.startsWith("http")
    ? product.images[0]
    : "https://dummyimage.com/300x300/cccccc/ffffff.png&text=No+Image";
  const { addToCart, cart } = useContext(CartContext);

  const title = product?.title || "Untitled Product";
  const price = product?.price || "N/A";

  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="flex flex-col justify-between bg-white p-4 rounded-lg shadow-md h-full">
      <div className="w-full h-48 mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">${price}</p>
        <button
          className={`p-2 w-full rounded mt-4 ${isProductInCart ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"}`}
          onClick={() => {
            if (!isProductInCart) {
              addToCart({ ...product, imageUrl, title, price });
            }
          }}
          disabled={isProductInCart}
        >
          {isProductInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
