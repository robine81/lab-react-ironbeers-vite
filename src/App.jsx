import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BeersPage from "./pages/BeersPage";
import NewBeerPage from "./pages/NewBeerPage";
import OneBeerPage from "./pages/OneBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<BeersPage />} />
      <Route path="/new-beer" element={<NewBeerPage />} />
      <Route path="/one-beer" element={<OneBeerPage />} />
      <Route path="/random-beer" element={<RandomBeerPage />} />
    </Routes>
  );
}

export default App;
