import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Categories extends Component {
  state = { categories: [] };

  componentDidMount() {
    fetch('/api/categories')
      .then(res => res.json())
      .then(data => this.setState({ categories: data.data }));
  }

  render() {
    return (
      <div className="Categories">
        <h2>Vad vill du äta</h2>
        {this.state.categories.map(category => (
          <div key={category.id}>
            <Link to={`/recips`} id={category.id}>
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
