import { useSelector } from "react-redux";
import { createSelector } from "reselect"; // Si no usas, lo puedes omitir
import { ProductCartCard } from "./ProductCartCard";
import { Box, Button, Typography } from "@mui/material";

// Selector memoizado para calcular el total solo si el carrito cambia
const selectCartTotal = createSelector(
  (state) => state.cart.cart,
  (cart) =>
    Array.isArray(cart) // Verifica que `cart` sea un array
      ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0
);

export const ProductCartContainer = () => {
  const carrito = useSelector((state) => state.cart);
  const total = useSelector(selectCartTotal);
  const isVisible = useSelector((state) => state.cart.isVisible);

  const isCartEmpty = carrito.cart.length === 0;

  return (
    <Box
      sx={{
        display: isVisible ? "block" : "none",
        position: "absolute",
        top: { xs: 20, sm: 50, md: 80, lg: 100 }, // Ajusta la distancia desde el top según el tamaño de pantalla
        left: { xs: "10px", sm: "auto", lg: "1900px" }, // Centramos en pantallas pequeñas y restauramos en grandes
        right: { xs: 10, sm: "auto" }, // Para pantallas chicas, agregar margen desde la derecha
        backgroundColor: "white",
        height: "auto",
        borderRadius: 5,
        color: "black",
        width: { xs: 90, sm: 250, md: 300, lg: 200 }, // Cambia el ancho según la pantalla
        padding: 2,
        border: "1px solid black",
        margin: "auto", // Centra horizontalmente en pantallas pequeñas
      }}
    >
      {!isCartEmpty && (
        <Box>
          <ProductCartCard />
          <Typography sx={{ padding: 2, fontSize: 22 }}>
            Total: ${total}
          </Typography>
          <Button sx={{ backgroundColor: "#771B1B", width: "100%" }}>
            <a
              href="https://wa.me/5491163099115"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              Enviar
            </a>
          </Button>
        </Box>
      )}
      {isCartEmpty && <Typography>El carrito está vacío</Typography>}
    </Box>
  );
};
