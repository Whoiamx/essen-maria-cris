import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const ProductCartCard = () => {
  const carrito = useSelector((state) => state.cart.cart);

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

            <IconButton aria-label="delete" size="small">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
