import { Component } from 'react';
import Products from './components/products';
import Layout from './components/layout';
import Title from './components/title';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: './products/tomate.jpg' },
      { name: 'Tomate', price: 1500, img: './products/tomate.jpg' },
      { name: 'Tomate', price: 1500, img: './products/tomate.jpg' }
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Title/>
          <Products
            AddToCar={() => console.log("ok")}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;