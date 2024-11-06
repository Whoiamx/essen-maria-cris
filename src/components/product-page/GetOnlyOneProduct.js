import { ProductsEssen } from "../../data";

export const GetOnlyOneProduct = (id) => {
  return ProductsEssen.find((el) => el.id === id);
};
