import { Component } from 'react';
import Product from './product';

const styles = {
  products: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Products extends Component {
  render() {
    const { products, AddToCar } = this.props;

    return (
      <div style={styles.products}>
        {products.map(prod =>
          <Product
            AddToCar={AddToCar}
            key={prod.name}
            product={prod}
          />
        )}
      </div>
    )
  }
}

export default Products;