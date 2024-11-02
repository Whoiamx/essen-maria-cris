import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WhatsApp } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";

export const WhatsappIcon = () => {
  return (
    <a
      href="https://wa.me/5491163099115?text=Hola%20Me%20gustaría%20saber%20mas%20sobre%20los%20productos"
      class="whatsapp"
      target="_blank"
    >
      <img
        id="wsp"
        src="/src/assets/png-clipart-whatsapp-logo-whatsapp-mobile-phones-messaging-apps-email-whatsapp-logo-logo-instant-messaging.png"
      />
    </a>
  );
};
