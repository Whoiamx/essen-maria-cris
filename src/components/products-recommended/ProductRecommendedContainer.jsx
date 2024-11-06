import { useState } from "react";
import { ProductContainerMain } from "../products/ProductContainerMain";
import { ProductsEssen } from "../../data";
import { Box, Typography } from "@mui/material";
import { filterProductsRecommended } from "./filterProductRecommended";
import { ProductCard } from "../products/ProductCard";

export const ProductRecommendedContainer = () => {
  const [productsFilter, setProductsFilter] = useState(
    filterProductsRecommended()
  );

  const [productsInCartOffer, setProductsInCartOffer] = useState([]);

  const handleProductsInCart = (product) => {
    setProductsInCartOffer((prevProducts) => [...prevProducts, product]);
  };

  console.log(productsInCartOffer);

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
        <Typography sx={{ fontSize: 30 }}>Productos en oferta</Typography>
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
          {productsFilter.map((el) => (
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
