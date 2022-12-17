import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/list" element={<PokemonsListPage />} />
        <Route path="/detail" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
