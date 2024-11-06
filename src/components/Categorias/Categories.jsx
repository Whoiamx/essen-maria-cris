import { Box, Typography } from "@mui/material";
import { CategoriesOfProducts } from "../../data/CategoriesOfProducts";
import { Categoria } from "./Categoria";

export const Categories = () => {
  const categories = CategoriesOfProducts;

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
        <Typography sx={{ fontSize: 32 }}>Categorias</Typography>
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
