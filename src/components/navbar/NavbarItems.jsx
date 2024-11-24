import { ShoppingCart } from "@mui/icons-material";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/reducers/cart/cartSlice";

export const NavbarItems = () => {
  const isVisible = useSelector((state) => state.cart.isVisible);
  const dispatch = useDispatch();
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
          <a className="nav-item" href="contacto">
            Contacto
          </a>
        </li>
        <li>
          <a className="nav-item" href="sobre-nosotros">
            Sobre nosotros
          </a>
        </li>

        <li>
          <a className="nav-item" href="productos">
            Productos
          </a>
        </li>
        <li>
          <a className="nav-item" href="promos">
            Promociones
          </a>
        </li>
      </ul>

      <ShoppingCart
        onClick={() => dispatch(toggleCart())}
        sx={{
          cursor: "pointer",
          fontSize: 32,
        }}
      />
    </>
  );
};
