import React from 'react';

import Square from './Square'

// class Row extends React.Component {
//   renderRow(i) {
//     let row = []

//     for (let o = 0; o < 3; o++) {
//       row.push(<Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />)
//     }

//     return row;
//   }

//   render() {
//     return (
//       <div className="board-row">
//         {this.renderRow(0)}
//       </div>
//     )
//   }
// }

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board