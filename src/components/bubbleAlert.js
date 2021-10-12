import { Component } from 'react';

const styles = {
  bubblealert: {
    backgroundColor: '#E9725A',
    color: '#fff',
    padding: '2px 10px',
    border: 'none',
    borderRadius: '15px',
    fontSize: '0.9rem',
    width: '20px'
  }
}

class BubbleAlert extends Component {
  render() {
    const { value } = this.props
    return (
      <span style={styles.bubblealert}>
          {value}
      </span>
    )
  }
}

export default BubbleAlert;