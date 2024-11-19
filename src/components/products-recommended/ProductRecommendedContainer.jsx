import { Box, Typography } from "@mui/material";
import { ProductCard } from "../products/ProductCard";
import { useSelector } from "react-redux";

export const ProductRecommendedContainer = () => {
  const productsRecommended = useSelector(
    (state) => state.recommended.recommended
  );

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
        <Typography sx={{ fontSize: 30, color: "#771B1B", fontWeight: 800 }}>
          Productos en oferta
        </Typography>
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
          {productsRecommended.map((el) => (
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
