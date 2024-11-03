import { Box, Typography } from "@mui/material";
import { ProductsEssen } from "../../data/index";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductContainerMain = ({ title }) => {
  const [products, setProducts] = useState(ProductsEssen);

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
        <Typography sx={{ fontSize: 30 }}>Productos {title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            alignItems: "center",
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          {products.map((el) => (
            <ProductCard
              id={el.id}
              name={el.name}
              image={el.image}
              price={el.price}
              key={el.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
