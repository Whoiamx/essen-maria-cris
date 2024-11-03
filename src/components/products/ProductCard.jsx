import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductCard = ({ id, name, image, price }) => {
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
        <Button variant="contained" sx={{ backgroundColor: "#771B1B" }}>
          Agregar al carrito
        </Button>
        <Button>Mas info</Button>
      </CardActions>
    </Card>
  );
};
