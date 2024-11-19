import { useSelector } from "react-redux";
import { createSelector } from "reselect"; // Si no usas, lo puedes omitir
import { ProductCartCard } from "./ProductCartCard";
import { Box, Button, Typography } from "@mui/material";

// Selector memoizado para calcular el total solo si el carrito cambia
const selectCartTotal = createSelector(
  (state) => state.cart.cart,
  (cart) => cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
);

export const ProductCartContainer = () => {
  const carrito = useSelector((state) => state.cart);
  const total = useSelector(selectCartTotal);

  const isCartEmpty = carrito.cart.length === 0;

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
      {!isCartEmpty && (
        <>
          <ProductCartCard />
          <Typography>Total: ${total}</Typography>
          <Button>
            <a
              href="https://wa.me/5491163099115"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar
            </a>
          </Button>
        </>
      )}
      {isCartEmpty && <Typography>El carrito está vacío</Typography>}
    </Box>
  );
};
