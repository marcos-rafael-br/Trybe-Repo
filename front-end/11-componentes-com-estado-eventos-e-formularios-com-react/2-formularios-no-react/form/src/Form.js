import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    //função com bind

    //state
    this.state = {
      textoRecebido: '',
    };
  }
  // função handle
  handle = (e) => this.setState({ textoRecebido: e.target.value });

  render() {
    return (
      <div>
        <form>
          <div>
            <label> Selecione </label>
            <select />
          </div>
          <div>
            <label> Nome </label>
            <input type="text" />
          </div>
          <div>
            <label> Email </label>
            <input type="email" />
          </div>
          <div>
            <label> Mensagem </label>
            <textarea
              name="textoRecebido"
              value={this.state.textoRecebido}
              onChange={this.handle}
            />
          </div>
          <div>
            <button type="submit">Enviar sua mensagem</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
