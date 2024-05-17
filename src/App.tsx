import "./App.css";
import { Navbar } from "./components/Assets/Navbar/Navbar";
import { MatchPage } from "./components/MatchPage/MatchPage";

function App() {
  return (
    <div className="min-h-screen text-gray-800 font-sans overflow-y-scroll h-screen text-sm leading-relaxed">
      <Navbar />
      <MatchPage />
    </div>
  );
}

export default App;
