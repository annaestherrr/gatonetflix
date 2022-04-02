//Libs
import React from "react";

import Gato from "../assets/gato.png";

//Styles
import styled from "styled-components";

const ContainerInicio = styled.div`
background-color: black;
height: 35rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
  color: white;
  font-weight: 100;
}

img{
    cursor:pointer;  
}
`;

export default class App extends React.Component {
  render() {
    return (
      <ContainerInicio>
        <img src={Gato} alt="Gato vendo tv"></img>
        <h1>Esse é meu projeto de requisição de API de filmes e series!</h1>
      </ContainerInicio>
    );
  }
}
