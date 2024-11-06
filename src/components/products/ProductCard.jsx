import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({
  id,
  name,
  image,
  price,
  handleProductsInCart,
  handleProductsInCartOffer,
}) => {
  return (
    <Card key={id}>
      <CardMedia
        component={"img"}
        sx={{ height: 140 }}
        image={`${image}`}
        title={`${name}`}
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
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize={18}
          textAlign={"center"}
          sx={{ color: "black" }}
        >
          <b>$ {price} </b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleProductsInCart({ id, name, price, image })}
          variant="contained"
          sx={{ backgroundColor: "#771B1B" }}
        >
          Agregar al carrito
        </Button>
        <Button>
          <Link to={`/producto/${id}`}>Más info</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
