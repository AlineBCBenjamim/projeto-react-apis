import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import nomePokemon from "../../assets/nomePokemon.svg";
import { HeaderStyles} from "./Styles";
import { goToPokemonsListPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";


const Header = () => {
  const{page, setPage} = useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <HeaderStyles>
      <img src={nomePokemon} alt="nome pokemon" />
      <button className="botao-pokedex" onClick={() =>
        {setPage("PokemonsListPage");
        goToPokemonsListPage(navigate);}}>Pokédex</button>
    </HeaderStyles>
  );
};

export default Header;
