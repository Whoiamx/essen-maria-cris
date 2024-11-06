import { ProductsEssen } from "../data";

export const Filters = () => {
  // const { filterProducts, setFilters } = useFilter();

  return (
    <>
      <div className="filters">
        <label htmlFor="categoryFilter">Ordenar por</label>
        <select>
          <option value="destacados">Destacados</option>
          <option value="new">Mas nuevos</option>
          <option value="highest">Mayor precio</option>
          <option value="lowest">Menor precio</option>
        </select>
      </div>
    </>
  );
};
