import React, { useEffect, useState } from "react";
import Header from "../../Components/HeaderPokeDex/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { BASE_URL } from "../../constants/url";
import axios from "axios";


const PokedexPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}pokemon?limit=151&offset=0`
      );
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    fetchPokemons();
  }, []);


  return (
    <>
      <Header />
      <main className="container-pokemons">
        <h2>Todos os Pokémons</h2>
        <section>
          {pokemons.map((pokemon) => {
            return(
              <PokemonCard 
              pokemonUrl={pokemon.url}
              pokemon={pokemon}
              key={pokemon.id}
              />
            )
          })}         
        </section>
      </main>
    </>
  );
};

export default PokedexPage;
