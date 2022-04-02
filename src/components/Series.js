//Libs
import React from "react";
import axios from "axios";

//Image
import Livre from "../assets/L.png";

//Styles
import styled from "styled-components";

const Container = styled.div`
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 100;
  padding: 1rem;

  h1 {
    color: #cd0000;
  }
`;

const Input = styled.input`
  height: 2rem;
  border-radius: 5px;
  border: transparent;
  background-color: #b5b5b5;
`;

const Image = styled.img`
  height: 20rem;
  border-radius: 5px;
  &:hover {
    height: 23rem;
  }
`;

const CardList = styled.ul`
  display: flex;
  list-style: none;
  height: 20rem;
  width: 40rem;
`;

const TextList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;

  p {
    font-size: 1rem;
  }
`;

const BoxImg = styled.div`
  img {
    height: 2rem;
  }
`;

const Footer = styled.div`
  display:flex;
  align-items:center; 
  flex-direction: column;

  h2{
     font-size: 1.5rem;
     font-weight: 200;
  }

  button{
    background-color:  #CD0000;
    height: 3rem;
    color: white;
    font-size: 1rem;
    border: transparent;

    a{
    color: white;
    text-decoration: none;
  }
  }
`;

const apiFilmes = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/tv/popular?api_key=b77e1d7f827d8de03a2397359f0f7046&language=en-US&page=1",
});

export default class App extends React.Component {
  state = {
    serieList: [],
    filterValue: "",
  };

  componentDidMount() {
    this.getFilmes();
  }

  getFilmes = async () => {
    // método try catch é usado em requisições de api para garantir que caso ocorra algum erro na chamada, não quebre a tela
    try {
      const response = await apiFilmes.get();
      const series = response.data.results.map((item) => {
        return {
          id: item.id,
          title: item.name,
          poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          description: item.overview,
          adult: item.adult
        };
      });

      this.setState({
        serieList: series,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChangeFilter = (ev) => {
    const { value } = ev.target;
    this.setState({
      filterValue: value,
    });
  };

  render() {
    
    const serieList = this.state.serieList.filter((item) =>
      item.title.toLowerCase().includes(this.state.filterValue.toLowerCase())
    );

    return (
      <Container id="voltar">
        <h1>Escolha uma seriezinha</h1>
        <Input
          type="text"
          placeholder="Procurar série..."
          onChange={this.handleChangeFilter}
        />

        {serieList.map((item) => (
          <CardList key={item.id}>
            <li>
              <Image
                src={item.poster_path}
                alt="Banner da série ${item.poster_path}"
              ></Image>
            </li>
            <TextList>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <BoxImg>
                <img src={Livre} alt="Icon série livre"></img>
              </BoxImg>
            </TextList>
          </CardList>
        ))}
        <Footer>
          <div>
            <h2>Por Anna Esther, tchau bj</h2>
          </div>
          <button>
            <a href="#voltar">Arrasta pra cima</a>
          </button>
        </Footer>
      </Container>
    );
  }
}
