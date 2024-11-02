import React from "react";
import { NavbarItems } from "./NavbarItems";

export const NavbarContainer = () => {
  return (
    <div className="navbar">
      <img src="/src/assets/Logo.svg" />
      <NavbarItems />
    </div>
  );
};
