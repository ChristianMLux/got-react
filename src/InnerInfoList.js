import React from "react";

class InnerInfoList extends React.Component {
  render() {
    return (
      <div className="inner-info-wrapper">
        <p className="inner-info-heading">{this.props.innerInfoHeading}</p>
        <ul className="inner-info-list">{this.props.innerInfoList}</ul>
      </div>
    );
  }
}

export default InnerInfoList;
