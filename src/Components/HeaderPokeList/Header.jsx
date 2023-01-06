import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import nomePokemon from "../../assets/nomePokemon.svg";
import { HeaderStyles } from "./Styles";
import { goToPokedexPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const {page, setPage} = useContext(GlobalContext);

  const navigate = useNavigate();
  return (
    <HeaderStyles>
      <p className="todos-pokemons" onClick={() => {setPage("PokedexPage") ;goToPokedexPage(navigate)}}>
        {" "}
        {"< Todos Pokémons"}{" "}
      </p>
      <a onClick={() => {setPage("PokedexPage"); goToPokedexPage(navigate)}}>
        <img src={nomePokemon} alt="nome pokemon" />{" "}
      </a>
    </HeaderStyles>
  );
};

export default Header;
