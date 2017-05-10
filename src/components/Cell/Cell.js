import React, { Component, PropTypes } from 'react'
import classNames from 'classnames';
import './style.css';

class Cell extends Component {
  
  render () {
    const {value} = this.props;
    const isFull = value > 0;
    const isFirstTurn = value === 1;
    const isSecondTurn = value === 2;
    const cellClass = classNames({
      "flex-item-circle-full-first": (isFull && isFirstTurn),
      "flex-item-circle-full-second": (isFull && isSecondTurn),
      "flex-item-circle-empty": !isFull,
      "show-piece": isFull,
      "hide-piece": !isFull,
    });
    return (
      <div className={cellClass}>
      </div>
    )
  }
}

Cell.propTypes = {
  isVisible: PropTypes.bool,

}

Cell.defaultProps = {
  isVisible: true,
}

export default Cell;