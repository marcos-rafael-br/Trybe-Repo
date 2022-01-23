import React from 'react';
import Cabeça from './Header';
import Content from './Content';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div>
      <Cabeça />
      <Content />
      <Footer />
    </div>
  );
}

/* class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
} */

export default App;
