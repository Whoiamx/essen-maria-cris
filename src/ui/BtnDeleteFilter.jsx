import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const BtnDeleteFilter = () => {
  return (
    <Button
      sx={{ backgroundColor: "#771B1B", color: "white", border: "black" }}
      variant="outlined"
      startIcon={<DeleteIcon />}
    >
      Borrar filtro
    </Button>
  );
};
