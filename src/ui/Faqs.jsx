import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const Faqs = () => {
  return (
    <div className="comprando">
      <h4 className="title-comprando">Preguntas Frecuentes</h4>
      <Accordion sx={{ width: "85%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#771b1b", color: "white" }}
        >
          ¿Qué formas de pago aceptan?
        </AccordionSummary>
        <AccordionDetails>
          Aceptamos tarjetas de crédito y débito, transferencias bancarias, y
          algunos medios digitales como Mercado Pago. Ofrecemos promociones con
          tarjetas seleccionadas, ¡consultá nuestras ofertas vigentes!
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "85%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ backgroundColor: "#771b1b", color: "white" }}
        >
          ¿Tienen cuotas sin interés?
        </AccordionSummary>
        <AccordionDetails>
          Sí, contamos con opciones de financiación en cuotas sin interés con
          tarjetas participantes. La disponibilidad y cantidad de cuotas
          dependen de las promociones vigentes.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "85%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ backgroundColor: "#771b1b", color: "white" }}
        >
          ¿Puedo comprar para revender?
        </AccordionSummary>
        <AccordionDetails defaultExpanded>
          ¡Claro! Si estás interesado en revender nuestras ollas, escribinos
          para recibir más información sobre precios mayoristas y beneficios
          exclusivos.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "85%" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ backgroundColor: "#771b1b", color: "white" }}
        >
          ¿Qué garantía tienen las ollas Essen?
        </AccordionSummary>
        <AccordionDetails defaultExpanded>
          Todas nuestras ollas Essen cuentan con garantía oficial de 2 años. Si
          surge algún problema, podés contactarnos para coordinar la solución.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
