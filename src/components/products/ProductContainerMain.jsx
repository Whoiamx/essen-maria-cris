import { Box, Typography } from "@mui/material";
import { ProductsEssen } from "../../data/index";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Filters } from "../../ui/Filters";
import { ProductCart } from "./../cart/ProductCart";

export const ProductContainerMain = ({ title }) => {
  const [products, setProducts] = useState(ProductsEssen);

  const [productsInCart, setProductsInCart] = useState([]);

  const handleProductsInCart = (product) => {
    setProductsInCart((prevProducts) => [...prevProducts, product]);
  };

  console.log(productsInCart);

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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography sx={{ fontSize: 30 }}>Productos {title}</Typography>
          <Filters />
        </Box>

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
              handleProductsInCart={handleProductsInCart}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
