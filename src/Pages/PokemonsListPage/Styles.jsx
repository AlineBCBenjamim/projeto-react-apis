import styled from "styled-components";

export const PokemonsListPageStyled = styled.main`
  background-color: #5d5d5d;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container-pokemons {
    margin: 30px;
    margin-bottom: 100px;
  }

  .title {
    font-weight: 700;
    font-size: 3rem;
    color: #ffffff;
    margin-left: 35px;
  }

  .container-pokemon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .meus-pokemons {
    width: 404px;
    height: 72px;
    color: FFFFFF;
    font-family: Poppins;
    margin-left: 35px;
  }

  .pokedex-vazia{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    h1{
      color: #ffffff;
      font-size: 2rem;
      margin-bottom: 30px;
    }
    img{
      width: 450px;
    }
  }
`;