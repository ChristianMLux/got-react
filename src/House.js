import React from "react";
import { Link } from "react-router-dom";

class House extends React.Component {
  render() {
    return (
      <Link
        className="listEntry"
        to={{
          pathname: "/" + this.props.index,
          state: { name: "25" },
        }}
      >
        {this.props.house}
      </Link>
    );
  }
}

export default House;
