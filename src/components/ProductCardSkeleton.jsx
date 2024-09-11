import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
};

const ProductSkeleton = () => {
  const skeletons = Array(6).fill(0);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {skeletons.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export { ProductSkeleton };
