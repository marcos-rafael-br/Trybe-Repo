import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  };

  handleClick2 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
  };

  handleClick3 = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
  };

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: this.getButtonColor(this.state.numeroDeCliques),
          }}
        >
          Botão 1 | Contagem = {this.state.numeroDeCliques}
        </button>
        <button onClick={this.handleClick2}>
          Botão 2 | Contagem = {this.state.numeroDeCliques2}
        </button>
        <button onClick={this.handleClick3}>
          Botão 3 | Contagem = {this.state.numeroDeCliques3}
        </button>
      </>
    );
  }
}

export default App;
