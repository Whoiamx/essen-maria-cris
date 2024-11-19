import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { GetOnlyOneProduct } from "./GetOnlyOneProduct";

export const ProductContainer = () => {
  return (
    <>
      <Box>
        <Box>
          <img src={`${ollas.img}`} />
        </Box>
        <Box>
          <h3>{ollas.name}</h3>
          <Button>Volver al inicio</Button>
        </Box>
      </Box>
    </>
  );
};
