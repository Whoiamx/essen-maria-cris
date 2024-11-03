import { Box, Button, TextField } from "@mui/material";

export const ContactFormContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 20,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Mandanos tu consulta</h3>
        <form>
          <TextField required id="outlined-required" label="Nombre" />
          <TextField required id="outlined-required" label="Apellido" />

          <TextField
            id="outlined-number"
            label="Celular"
            type="phone"
            required
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            sx={{ width: 700 }}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            label="Dejanos tu consulta"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#771B1B" }}
          >
            Enviar consulta
          </Button>
        </form>
      </Box>
      <iframe
        className="map-name"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.7747471353928!2d-58.37371221137415!3d-34.660391190694206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3335306fe14cd%3A0xd5a17528f460fd2d!2sAv.%20Manuel%20Belgrano%20330%2C%20B1870ARO%20Avellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1730648565898!5m2!1ses-419!2sar"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};
