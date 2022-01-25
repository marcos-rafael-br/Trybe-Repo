// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import Pokemon from './Pokemon';
import data from './data'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="row">
          {data.map(user => <Pokemon key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;
