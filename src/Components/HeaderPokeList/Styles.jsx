import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
  gap: 530px;

  img {
    position: absolute;
    top: 9%;
    left: 50%;
    transform: translate(-50%, -50%);
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
`;
