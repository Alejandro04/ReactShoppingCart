import { Component } from 'react';
import BubbleAlert from './bubbleAlert';

const styles = {
  car: {
    backgroundColor: '#359A2C',
    color: '#fff',
    padding: '15px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20
  }
}

class Car extends Component {
  render() {
    const { car } = this.props
    const quantity = car.reduce((acc, el) => acc + el.quantity, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {
            quantity !== 0 
            ? <BubbleAlert value={quantity}/>
            : null
          }
        </span>
        <button style={styles.car}>
          Carro
        </button>
      </div>
    )
  }
}

export default Car;