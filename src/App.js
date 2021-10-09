import { Component } from 'react';
import Products from './components/products';

class App extends Component {
  state = {
    products: [
      {name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      {name: 'Tomate', price: 1500, img: '/products/tomate.jpg'},
      {name: 'Tomate', price: 1500, img: '/products/tomate.jpg'}
    ]
  }
  render(){
    return (
      <div>
        <Products 
        AddToCar={() => console.log("ok")}
        products={this.state.products}
        />
      </div>
    )
  }
}

export default App;