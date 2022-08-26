import "./App.scss";
import { HeaderBottom } from "./components/Header/Header-bottom/HeaderBottom";
import { HeaderCenter } from "./components/Header/Header-center/HeaderCenter";
import { HeaderTop } from "./components/Header/Header-top/HeaderTop";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <HeaderCenter />
      <HeaderBottom />
    </div>
  );
}

export default App;
