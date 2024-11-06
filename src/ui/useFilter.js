import { useState } from "react";

export const useFilter = () => {
  const [filters, setFilters] = useState({
    option: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((prod) => {
      return prod.price >= filters.minPrice;
    });
  };
  return { filterProducts, setFilters };
};
