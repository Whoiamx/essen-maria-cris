import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductPageItem = () => {
  const { id } = useParams();

  const productor = useSelector((state) =>
    state.products.products.find((item) => item.id === Number(id))
  );

  return (
    <Card sx={{ maxWidth: 800, minHeight: 500 }}>
      <CardMedia
        sx={{ height: 400, width: 500 }}
        image={`${productor.image}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productor.name}
        </Typography>
        <Typography>{productor.description}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ${productor.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
