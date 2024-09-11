import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

// Create the context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [isProductsLoading, setIsProductsLoading] = useState(true);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
      setFilteredProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setIsProductsLoading(false);
    }
  };

  // Filter logic
  const filterProducts = (filters) => {
    let updatedProducts = [...products];

    if (filters.category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.price) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price <= filters.price
      );
    }

    if (filters.sort === "price-asc") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  };

  // Fetch products when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValue = useMemo(
    () => ({
      products,
      filteredProducts,
      isProductsLoading,
      filterProducts,
    }),
    [products, filteredProducts, isProductsLoading]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
