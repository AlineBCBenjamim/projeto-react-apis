import axios from 'axios';
import React, { useState } from 'react';



function GlobalState() {
    const [pokelist, setPokelist] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState("PokedexPage");
    const [isAddPokemon, setIsAddPokemon] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // filtro da pokedex para não aparecer os pokemons da pokelist

    const filterPokemon = (pokemonName) => {
        const pokeFilter = pokemons.filter(
            (pokemon) => pokemon.name !== pokemonName
        );
        setPokemons(pokeFilter);
    };


    // adicionar pokemons a pokelist

    const addToPokelist = (pokemonToAdd) => {
        setIsAddPokemon(true)
        const isAlreadyOnPokelist = pokelist.find(
            (pokemonInPokelist) => pokemonInPokelist.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokelist){
            const newPokelist = [...pokelist, pokemonToAdd];
            const pokelistJson = JSON.stringify(newPokelist);
            localStorage.setItem("pokelist", pokelistJson);
            setPokelist(newPokelist);
        }
        filterPokemon(pokemonToAdd.name);
        showModal()
    } 
        // remover pokemons da pokelist

    const removeFromPokelist = (pokemonToRemove) =>{
        setIsAddPokemon(false)
        const newPokelist = pokelist.filter(
            (pokemonInPokelist) => pokemonInPokelist.name !== pokemonToRemove.name
        );
        setPokelist(newPokelist);
        showModal()
    }

    const showModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return {
      filterPokemon,
      addToPokelist,
      removeFromPokelist,
      pokelist,
      setPokelist,
      pokemons,
      setPokemons,
      page,
      setPage,
      showModal,
      closeModal,
      isAddPokemon,
      setIsAddPokemon,
      setIsModalOpen,
      isModalOpen,
    };
};

export default GlobalState;






