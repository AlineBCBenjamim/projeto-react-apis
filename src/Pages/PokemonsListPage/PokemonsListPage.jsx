import React, { useContext } from 'react'
import Header from '../../Components/HeaderPokeList/Header';
import { PokemonsListPageStyled } from "../../Pages/PokemonsListPage/Styles";
import pokedex from "../../assets/pokedex-vazia.png";
import {GlobalContext} from "../../contexts/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Footer from "../../Components/Footer/Footer";
import Modal from '../../Components/Modal/Modal';

const PokemonsListPage = () => {
  const{pokelist, isModalOpen} = useContext(GlobalContext)

  return (
    <>
    {isModalOpen && <Modal/>}
      <Header />
      <PokemonsListPageStyled>
        <section className="container-pokemons">
          <h1 className="title"> Meus Pokémons</h1>
          {pokelist.length === 0 && (
            <div className="pokedex-vazia">
              <h1>Você não capturou nenhum pokémon!</h1>
              <img src={pokedex} alt="pokédex vazia" />
            </div>
          )}
          ;
          <section className="container-pokemon">
            {pokelist.map((pokemon) => {
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
      </PokemonsListPageStyled>
      <Footer />
    </>
  );
}

export default PokemonsListPage