import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background: #be0be2;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 160px;

  .nome-pokemon {
    display: flex;
    width: 307px;
    height: 113px;
    padding: 2px 0;
  }

  .botao-pokedex {
    display: flex;
    align-self: center;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    width: 287px;
    height: 74px;
    left: 1112px;
    top: 41px;
    margin-right: 20px;
    background: #33a4f5;
    border-radius: 8px;
  }
`;
