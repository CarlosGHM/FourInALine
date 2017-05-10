import React, { Component } from 'react'
import classNames from 'classnames';
import './style.css';

class CellOption extends Component {
  constructor(params) {
    super(params);
    this.state = {
      isVisible: false,
    }
    this.onUsersOver = this.onUsersOver.bind(this);
    this.onUserLeave = this.onUserLeave.bind(this);
    this.onChose = this.onChose.bind(this)
  }

  onUsersOver(e) {
    this.setState({ isVisible: true });
  }

  onUserLeave(e) {
    this.setState({ isVisible: false });
  }

  onChose(e) {
    this.props.onClick(e, this.props.column);
  }

  render() {
    const { isFirstTurn } = this.props;
    const { isVisible } = this.state;
    const cellClass = classNames({
      "flex-item-circle-full-first": (isVisible && isFirstTurn),
      "flex-item-circle-full-second": (isVisible && !isFirstTurn),
      "flex-item-circle-empty": !isVisible,
      "show-piece": isVisible,
      "hide-piece": !isVisible,
    });
    return (
      <div
        className={cellClass}
        onClick={this.onChose}
        onMouseOver={this.onUsersOver}
        onMouseLeave={this.onUserLeave}>
      </div>
    );
  }
}

CellOption.propTypes = {

}

export default CellOption;