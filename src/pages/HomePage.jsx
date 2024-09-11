import React from "react";
import { FilterSidebar } from "../components/FilterSidebar";
import { ProductList } from "../components/ProductList";

const HomePage = () => {
  return (
    <div className="min-h-screen  flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 md:fixed top-0 md:h-full bg-gray-100 z-10">
        <FilterSidebar />
      </div>

      {/* Right Scrollable Content */}
      <div className="w-full md:w-3/4 ml-auto md:overflow-y-auto">
        <ProductList />
      </div>
    </div>
  );
};

export { HomePage };
