import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { GiClothes, GiTennisBall } from "react-icons/gi";
import { MdDevices, MdKitchen } from "react-icons/md";

const categories = [
  { name: "Electronics", icon: <MdDevices size={40} className="text-blue-500" />, ariaLabel: "Electronics" },
  { name: "Fashion", icon: <GiClothes size={40} className="text-pink-500" />, ariaLabel: "Fashion" },
  { name: "Home & Kitchen", icon: <MdKitchen size={40} className="text-green-500" />, ariaLabel: "Home and Kitchen" },
  { name: "Beauty & Health", icon: <FaHeartbeat size={40} className="text-red-500" />, ariaLabel: "Beauty and Health" },
  { name: "Sports & Outdoors", icon: <GiTennisBall size={40} className="text-yellow-500" />, ariaLabel: "Sports and Outdoors" },
];

const Categories = () => {
  return (
    <section className="w-full flex flex-wrap justify-center items-center gap-6 py-8 bg-white shadow-md">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex-none sm:w-48 w-full h-36 flex flex-col justify-center items-center gap-3 border-2 border-black rounded-lg shadow-md p-4 hover:scale-105 transition-transform bg-white"
          aria-label={category.ariaLabel}
        >
          {category.icon}
          <h1 className="text-md font-semibold text-gray-700">{category.name}</h1>
        </div>
      ))}
    </section>
  );
};

export default Categories;
