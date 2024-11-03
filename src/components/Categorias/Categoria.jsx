import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const Categoria = ({ img, title, id }) => {
  return (
    <>
      <Card
        key={id}
        sx={{ maxWidth: 300, padding: 2, borderRadius: 5, cursor: "pointer" }}
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
