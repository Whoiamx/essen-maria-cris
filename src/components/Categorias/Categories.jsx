import { Box, Typography } from "@mui/material";
import { CategoriesOfProducts } from "../../data/CategoriesOfProducts";
import { Categoria } from "./Categoria";
import { BtnDeleteFilter } from "../../ui/BtnDeleteFilter";

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
          gap: 4,
        }}
      >
        <Typography sx={{ fontSize: 30, color: "#771B1B", fontWeight: 800 }}>
          Categorias
        </Typography>

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
            <Categoria
              title={el.title}
              img={el.img}
              key={el.id}
              category={el.category}
            />
          ))}
        </Box>
        <BtnDeleteFilter />
      </Box>
    </>
  );
};
