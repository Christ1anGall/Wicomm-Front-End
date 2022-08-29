import { HeaderBottom } from "./Header-bottom/HeaderBottom";
import { HeaderCenter } from "./Header-center/HeaderCenter";
import { HeaderTop } from "./Header-top/HeaderTop";
import React from "react";

function Header({ gotoFrag }) {
  return (
    <header>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom gotoFrag={gotoFrag} />
    </header>
  );
}

export default Header;
