import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { DELETE_ALL_ONE_ELEMENT } from "../../redux/reducers/cart/cartSlice";

export const ProductCartCard = () => {
  const carrito = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    console.log("id a eliminar", id);
    dispatch(DELETE_ALL_ONE_ELEMENT({ id }));
  };

  return (
    <div className="rapidito">
      {carrito.map((item) => (
        <Card key={item.id}>
          <CardMedia
            component={"img"}
            sx={{ height: 140 }}
            image={`${item.image}`}
            title={`${item.name}`}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={18}
              textAlign={"center"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
              sx={{ color: "black" }}
            >
              {item.name}
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              x {item.quantity}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontSize={18}
              textAlign={"center"}
              sx={{ color: "black" }}
            >
              <b>$ {item.price * item.quantity} </b>
            </Typography>
            <IconButton
              onClick={() => handleDeleteItem(item.id)}
              aria-label="delete"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
