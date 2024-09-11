import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const FilterSidebar = () => {
  const { filterProducts, products } = useContext(ProductContext);
  const [filters, setFilters] = useState({
    category: "",
    price: 0,
    sort: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handlePriceChange = (e) => {
    setFilters({ ...filters, price: e.target.value });
  };

  const handleSortChange = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };

  const applyFilters = () => {
    filterProducts(filters);
  };

  return (
    <div className=" p-4">
      <h3 className="text-xl font-bold mb-4">Filters</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          onChange={handleCategoryChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Sort By</label>
        <select
          onChange={handleSortChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export { FilterSidebar };
