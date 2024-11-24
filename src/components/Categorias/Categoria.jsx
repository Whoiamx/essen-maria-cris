import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../redux/reducers/products/productsSlice";
import { getProductsRecommendedByCategory } from "../../redux/reducers/recommended/recommendedSlice";

export const Categoria = ({ img, title, id, category }) => {
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    console.log(category);
    dispatch(getProductsByCategory(category));
    dispatch(getProductsRecommendedByCategory(category));
  };
  return (
    <>
      <Card
        key={id}
        sx={{ maxWidth: 300, padding: 2, borderRadius: 5, cursor: "pointer" }}
        onClick={() => handleFilter(category)}
      >
        <CardMedia
          sx={{ height: 100, width: 150, borderRadius: 5 }}
          image={img}
          title={title}
        />
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>{title}</Typography>
        </CardContent>
      </Card>
    </>
  );
};
