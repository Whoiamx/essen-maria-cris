import { Box, Button } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { GetOnlyOneProduct } from "./GetOnlyOneProduct";

export const ProductContainer = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const ollas = GetOnlyOneProduct(id);
  console.log(ollas);
  // if (!ollas) return <Navigate to="/" />;

  const onReturn = () => {
    navigate(-1);
  };
  return (
    <>
      <Box>
        <Box>
          <img src={`${ollas.img}`} />
        </Box>
        <Box>
          <h3>{ollas.name}</h3>
          <Button onClick={onReturn}>Volver al inicio</Button>
        </Box>
      </Box>
    </>
  );
};
