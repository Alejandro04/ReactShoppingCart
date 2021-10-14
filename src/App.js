import { Component } from 'react';
import Products from './components/products';
import Layout from './components/layout';
import Title from './components/title';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    products: [
      { name: 'Tomate', price: 1500, img: './products/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: './products/tomate.jpg' },
      { name: 'Lechuga', price: 500, img: './products/tomate.jpg' },
    ],
    car: []
  }

  AddToCar = (product) => {
    const { car } = this.state
    if (car.find(x => x.name === product.name)) {
      const newCar = car.map(x => x.name === product.name
        ? ({
          ...x,
          quantity: x.quantity + 1
        })
        : x)
      return this.setState({ car: newCar })
    }
    return this.setState({
      car: this.state.car.concat({
        ...product,
        quantity: 1
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar car={this.state.car} />
        <Layout>
          <Title />
          <Products
            AddToCar={this.AddToCar}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;