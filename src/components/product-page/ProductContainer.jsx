import { Box } from "@mui/material";
import { ProductPageItem } from "./ProductPageItem";

export const ProductContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 25,
      }}
    >
      <ProductPageItem />
    </Box>
  );
};
