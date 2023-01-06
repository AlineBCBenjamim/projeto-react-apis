import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import {FooterStyled} from "./Styles";

 export default function Footer () {

  return (
    
    <FooterStyled>
      
        <h3>Desenvolvido por Aline Benjamim - 2023</h3>
        <div className="redes-sociais">
          <a href="https://github.com/AlineBCBenjamim" target={"_blank"}>
            <img src={github} alt="icone do github" rel="noopener noreferrer" />
          </a>
          <a
            href="https://www.linkedin.com/in/alinebcarvalhobenjamim/"
            target={"_blank"}
          >
            <img
              src={linkedin}
              alt="icone do linkedin"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      
    </FooterStyled>
  );
};


