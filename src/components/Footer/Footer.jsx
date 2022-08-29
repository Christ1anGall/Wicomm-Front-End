import { FooterBottom } from "./FooterBottom/FooterBottom";
import { FooterCenter } from "./FooterCenter/FooterCenter";
import { FooterTop } from "./FooterTop/FooterTop";
import React from "react";

function Footer() {
  return (
    <footer>
      <FooterTop />
      <FooterCenter />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
