import React from "react";

class MainButton extends React.Component {
  render() {
    return (
      <button
        className={this.props.buttonClass}
        id={this.props.buttonID}
        onClick={this.props.buttonFunction}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default MainButton;
