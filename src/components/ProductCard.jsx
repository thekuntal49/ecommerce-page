import React from "react";

const ProductCard = ({ product }) => {
  const truncateTitle = (title, length) => {
    if (title.length > length) {
      return title.substring(0, length) + " ...";
    }
    return title;
  };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg hover:translate-x-1 transition duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-contain rounded-lg mb-4"
      />
      <h4 className="text-lg text-gray-800 font-bold mb-2">
        {truncateTitle(product.title, 20)}
      </h4>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-800 font-semibold mt-2">
        Price: ₹{(product.price * 80).toFixed(0)}
      </p>
    </div>
  );
};

export { ProductCard };
