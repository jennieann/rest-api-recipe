import React, { Component } from 'react';
//import './style.css';

class Recipes extends Component {
  state = { recipes: [] };

  componentDidMount() {
    fetch('/api/recipes/')
      .then(res => res.json())
      .then(data => this.setState({ recipes: data.data }));
  }

  render() {
    return (
      <div className="recipes">
        <h3>Recept</h3>
        {this.state.recipes.map(recipe => (
          <div key={recipe.id}>{recipe.name}</div>
        ))}
      </div>
    );
  }
}

export default Recipes;
