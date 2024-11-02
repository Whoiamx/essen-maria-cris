import { Box } from "@mui/material";
import { CategoriesOfProducts } from "../../data/CategoriesOfProducts";
import { Categoria } from "./Categoria";

export const Categories = () => {
  const categories = CategoriesOfProducts;
  console.log(categories);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 5,
        }}
      >
        <h2>Categorias</h2>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          {categories.map((el) => (
            <Categoria title={el.title} img={el.img} key={el.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};
