import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Footer = () => {
  return (
    <div className="footer">
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
            algunos medios digitales como Mercado Pago. Ofrecemos promociones
            con tarjetas seleccionadas, ¡consultá nuestras ofertas vigentes!
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
            Todas nuestras ollas Essen cuentan con garantía oficial de 2 años.
            Si surge algún problema, podés contactarnos para coordinar la
            solución.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="contact-us">
        <p className="title-footer">Tenes alguna pregunta?</p>
        <button id="btn-contact">Contactanos!</button>
      </div>
      <div className="social-media">
        <p className="title-footer">Seguinos!</p>
        <div className="redes-icons">
          <a href="https://www.instagram.com/?hl=es" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/?lang=es" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0Zm3.1623 4h-2.7508v10.9209a2.3324 2.3324 0 0 1-3.0455 2.2209 2.3324 2.3324 0 0 1 1.4129-4.4459V9.8862a5.0812 5.0812 0 0 0-5.7481 5.5912 5.0805 5.0805 0 0 0 3.802 4.3668 5.0818 5.0818 0 0 0 5.423-2.0286c.5899-.8501.9062-1.86.9065-2.8947V9.3345A6.5666 6.5666 0 0 0 19 10.5614V7.83a3.796 3.796 0 0 1-2.0944-.6295 3.8188 3.8188 0 0 1-1.6852-2.5075 3.7856 3.7856 0 0 1-.058-.693Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
