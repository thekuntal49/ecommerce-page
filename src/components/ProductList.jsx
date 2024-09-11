import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./ProductCardSkeleton";

const ProductList = () => {
  const { filteredProducts, isProductsLoading } = useContext(ProductContext);

  return (
    <div className="container mx-auto p-4">
      {isProductsLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export { ProductList };
