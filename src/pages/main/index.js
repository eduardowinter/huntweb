import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import './styles.css';

export default class Main extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data.docs });
  };

  render() {
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button>Anterior</button>
          <button>Próxima</button>
        </div>
      </div>
    );
  }
}
