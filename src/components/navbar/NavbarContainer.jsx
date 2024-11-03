import React from "react";
import { NavbarItems } from "./NavbarItems";

export const NavbarContainer = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img src="/src/assets/Logo.svg" />
      </a>
      <NavbarItems />
    </div>
  );
};
