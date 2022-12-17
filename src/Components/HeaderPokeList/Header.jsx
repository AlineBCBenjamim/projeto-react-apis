import React from "react";
import nomePokemon from "../../assets/nomePokemon.svg";
import { HeaderStyles} from "./Styles";

const Header = () => {
  return (
    <HeaderStyles>
      <img className="nome-pokemon" src={nomePokemon} alt="nome pokemon" />
      <button className="botao-pokedex">Pokédex</button>
    </HeaderStyles>
  );
};

export default Header;
