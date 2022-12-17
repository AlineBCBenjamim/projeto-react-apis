import React from "react";
import { useNavigate } from "react-router-dom";
import nomePokemon from "../../assets/nomePokemon.svg";
import { HeaderStyles} from "./Styles";

const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderStyles>
      <img className="nome-pokemon" src={nomePokemon} alt="nome pokemon" />
      <button className="botao-pokedex" onClick={() => goToPokemonsListPage(navigate)}>
        Pokédex
      </button>
    </HeaderStyles>
  );
};

export default Header;
