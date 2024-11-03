import { ShoppingCart } from "@mui/icons-material";
import { Input } from "@mui/material";

export const NavbarItems = () => {
  return (
    <>
      <Input
        sx={{
          height: 40,
          width: 500,
          backgroundColor: "white",
          borderRadius: 1,
          padding: 2,
        }}
        autoFocus
        type="search"
        placeholder="¿Qué te gustaría comprar hoy?"
      />
      <ul className="nav-bar-items">
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Sobre nosotros</a>
        </li>

        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Promociones</a>
        </li>
      </ul>
      <ShoppingCart sx={{ cursor: "pointer", fontSize: 32 }} />
    </>
  );
};
