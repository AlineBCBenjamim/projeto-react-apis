import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import nomePokemon from "../../assets/nomePokemon.svg";
import { HeaderStyles } from "./Styles";
import { goToPokedexPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const Header = ({ pokemonObject }) => {
  const { page, setPage, pokelist, addToPokelist, removeFromPokelist } =
    useContext(GlobalContext);
  const navigate = useNavigate(); 

  //filtro para comparar se o pokemon foi capturado ou não

  const filterPokelist = pokelist.filter((pokemon) => {
    return pokemon.name === pokemonObject?.name;
  });

  return (
    <HeaderStyles>
      <p
        className="todos-pokemons"
        onClick={() => {
          setPage("PokedexPage");
          goToPokedexPage(navigate);
        }}
      >
        {" "}
        {"< Todos Pokémons"}{" "}
      </p>
      <a a onClick={() => goToPokedexPage(navigate)}>
        <img className="nome-pokemon" src={nomePokemon} alt="nome pokemon" />
      </a>
      {filterPokelist.length > 0 && (
        <button
          className="botao-excluir-pokedex"
          onClick={() => {
            removeFromPokelist(pokemonObject);
          }}
        >
          Excluir da Pokédex
        </button>
      )}
      {filterPokelist.length === 0 && (
        <button
          className="botao-add"
          onClick={() => {
            addToPokelist(pokemonObject);
          }}
        >
          Adicionar à Pokédex
        </button>
      )}
    </HeaderStyles>
  );
};

export default Header;
