// arquivo Order.js
import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="card">
        <div>
          <li>{this.props.user.name}</li>
          <li>{this.props.user.type}</li>
          <li>{`averageWeight: ${this.props.user.averageWeight.value} kg`}</li>
        </div>
        <img src={this.props.user.image}></img>
      </div>
    );
  }
}

export default Pokemon;
