import React from "react";
import { Link } from "react-router-dom";

class House extends React.Component {
  render() {
    return (
      <Link
        className="listEntry"
        to={{
          pathname: "/" + this.props.index,
        }}
      >
        {this.props.house}
      </Link>
    );
  }
}

export default House;
