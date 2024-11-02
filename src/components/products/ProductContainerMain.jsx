import { Box } from "@mui/material";
import { ProductsEssen } from "../../data/index";
import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";

export const ProductContainerMain = () => {
  const [products, setProducts] = useState(ProductsEssen);

  console.log("El error de los productos", products);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: 10,
        alignItems: "center",
        gap: 5,
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
  );
};
