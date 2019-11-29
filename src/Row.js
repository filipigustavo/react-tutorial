import React from 'react';

import Square from './Square'

class Row extends React.Component {
  renderSquares (index) {
    let squares = []

    for (let i = 0; i < 3; i++) {
      let value = index + i + (2 * index)

      squares.push(<Square
        key={'square-'+value}
        value={this.props.squares[value]}
        onClick={() => this.props.onClick(value)}
      />)
    }

    return squares;
  }

  render () {
    return (
      <div className="board-row">
        {this.renderSquares(this.props.index)}
      </div>
    )
  }
}

export default Row