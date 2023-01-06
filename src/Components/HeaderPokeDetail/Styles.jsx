import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;

  .nome-pokemon {
    display: flex;
    width: 307px;
    height: 113px;
    padding: 2px 0;
    cursor: pointer;
  }

  .botao-excluir-pokedex {
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    background: #ff6262;
    color: #ffffff;
    border-radius: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 24px;
    margin-right: 60px;
    border: none;
    cursor: pointer;
  }

  .todos-pokemons {
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    left: 1112px;
    top: 41px;
    margin-left: 20px;
    color: #1a1a1a;
    size: 24px;
    border-radius: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 24px;
    text-decoration: underline;
    cursor: pointer;
  }
  .botao-add {
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    background: #33a4f5;
    color: #ffffff;
    border-radius: 8px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 24px;
    margin-right: 60px;
    border: none;
    cursor: pointer;
  }
`;