import { HeaderBottom } from "./Header-bottom/HeaderBottom";
import { HeaderCenter } from "./Header-center/HeaderCenter";
import { HeaderTop } from "./Header-top/HeaderTop";

function Header() {
  return (
    <>
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </>
  );
}

export default Header;
