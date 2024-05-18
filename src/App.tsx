import "./App.css";
import { NavbarSmartPhone } from "./components/Assets/Navbar/NavbarSmartPhone";
import { MatchPage } from "./components/MatchPage/MatchPage";

function App() {
  return (
    <div className="min-h-screen text-gray-800 font-sans overflow-y-scroll h-screen text-sm leading-relaxed">
      <div className="bgPadding min-h-[calc(100vh-100px)] max-w-[1000px] mx-auto bg-gray-200 py-[10px] pb-[16px] relative">
        <NavbarSmartPhone />
        <div className="widthControl max-w-[975px] mx-auto z-10 relative px-2.5">
          <div className="colCon grid gap-y-0 gap-x-4">
            <div className="contentCol max-w-[650px]">
              <MatchPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
