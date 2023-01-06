import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/HeaderPokeDex/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { PokedexPageStyled } from "../PokedexPage/Styles";
import { GlobalContext } from "../../contexts/GlobalContext";
import Footer from "../../Components/Footer/Footer";
import Modal from "../../Components/Modal/Modal";


const PokedexPage = () => {
  const { pokemons, setPokemons, pokedex, setPokedex, pokelist, isModalOpen } =
    useContext(GlobalContext);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}pokemon?limit=151&offset=0`);
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  // filtrar pokemons da pokedex

  const filteredPokedex = () =>
    pokemons.filter(
      (pokemonInList) =>
        !pokelist.find(
          (pokemonInPokelist) => pokemonInList.name === pokemonInPokelist.name
        )
    );
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {isModalOpen && <Modal/>}
      <Header />
      <PokedexPageStyled>
        <section className="container-pokemons">
          <h1 className="title">Todos os Pokémons</h1>
          <section className="container-pokemon">
            {filteredPokedex().map((pokemon) => {
              return (
                <PokemonCard
                  pokemonUrl={pokemon.url}
                  pokemon={pokemon}
                  key={pokemon.id}
                />
              );
            })}
          </section>
        </section>
        <button onClick={handleClick} className="scroll-top-button">
          ↑
        </button>
        <handleClick />
      </PokedexPageStyled>
      <Footer />
    </>
  );
};

export default PokedexPage;
