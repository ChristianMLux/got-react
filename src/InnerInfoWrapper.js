import React from "react";

class InnerInfoWrapper extends React.Component {
  render() {
    return (
      <div className="inner-info-wrapper">
        <p className="inner-info-heading">{this.props.innerInfoHeading}</p>
        <p className="inner-info-content">{this.props.innerInfoContent}</p>
      </div>
    );
  }
}

export default InnerInfoWrapper;
