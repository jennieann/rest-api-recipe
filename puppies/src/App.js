import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { puppies: [] };

  componentDidMount() {
    fetch('/api/puppies')
      .then(res => res.json())
      .then(data => this.setState({ puppies: data.data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Puppies</h1>
        {console.log(this.state.puppies)}
        {this.state.puppies.map(pupps => (
          <div key={pupps.id}>{pupps.name}</div>
        ))}
      </div>
    );
  }
}

export default App;
