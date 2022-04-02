//Libs
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//Components
import Inicio from "./components/Inicio";
import Filmes from "./components/Filmes";
import Series from "./components/Series";

//Styles
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    color: #cd0000;
    font-size: 2.5rem;
    &:hover {
      cursor: pointer;
      text-shadow: 7px 7px 10px #cd0000;
    }
    transition: text-shadow 0.5s;
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 3rem;
    font-size: 2rem;
    color: white;
  }
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header>
          <h1>GatoNetFlix</h1>
          <nav>
            <ul>
              <li>
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/Filmes"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Filmes
                </Link>
              </li>
              <li>
                <Link
                  to="/Series"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Series
                </Link>
              </li>
            </ul>
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Filmes" element={<Filmes />} />
          <Route path="/Series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}
