import { ProductsEssen } from "../../data/index";

export const filterProductsRecommended = () => {
  return ProductsEssen.filter((el) => el.id % 2 === 0);
};
