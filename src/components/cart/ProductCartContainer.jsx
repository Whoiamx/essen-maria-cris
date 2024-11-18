import { useSelector } from "react-redux";
import { ProductCartCard } from "./ProductCartCard";
import { Box, Typography } from "@mui/material";

export const ProductCartContainer = ({}) => {
  const carrito = useSelector((state) => state.cart);
  console.log(carrito);
  return (
    <Box
      sx={{
        position: "absolute",
        top: 100,
        left: 1900,
        backgroundColor: "white",
        height: "auto",
        borderRadius: 5,
        color: "black",
        width: 200,
        padding: 2,
        border: ["black", 1],
      }}
    >
      <ProductCartCard />
      <Typography>Total: $</Typography>
    </Box>
  );
};
