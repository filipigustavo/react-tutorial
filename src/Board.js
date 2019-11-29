import React from 'react';

import Row from './Row'

class Board extends React.Component {
  renderRows() {
    let rows = []

    for (let i = 0; i < 3; i++) {
      rows.push(<Row
        key={'row-'+i}
        squares={this.props.squares}
        onClick={this.props.onClick}
        index={i}
      />)
    }

    return rows
  }

  render() {
    return (
      <div>
        {this.renderRows()}
      </div>
    );
  }
}

export default Board