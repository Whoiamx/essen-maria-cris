import { Box, Typography } from "@mui/material";

import { ProductCard } from "./ProductCard";
import { Filters } from "../../ui/Filters";

import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../redux/reducers/cart/cartSlice";

export const ProductContainerMain = ({ title }) => {
  const productsAll = useSelector((state) => state.products.products);

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
          {productsAll.map((el) => (
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
