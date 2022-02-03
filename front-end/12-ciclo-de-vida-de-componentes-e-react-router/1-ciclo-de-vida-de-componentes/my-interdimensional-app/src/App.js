// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://naruto-api.herokuapp.com/api/v1/characters')
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0])
        this.setState({ characters: data });
      });
  };

  componentDidMount = () =>{
    this.fetchCharacters()
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Naruto Characters:</h1>
        <div className="body">
          {characters.map(({name,images}) => {
            return <div className="container" key={name}>
              <h3>{name}</h3>
            <img src={images[0]} alt={name} />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
