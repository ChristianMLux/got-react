import React from "react";

import House from "./House";
import "./allHouses.css";

let housePageCount = 24;
let houseCounter = 1;

class AllHouses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      houses: [],
    };
  }
  switchPage() {
    houseCounter++;
  }

  componentDidMount() {
    let url = "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20";
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            houses: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  componentDidUpdate() {
    if (houseCounter <= housePageCount) {
      let url =
        "https://www.anapioficeandfire.com/api/houses?page=" +
        houseCounter +
        "&pageSize=20";
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              houses: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
      if (houseCounter === housePageCount) {
        houseCounter = 1;
      }
    }
  }

  render() {
    const { error, isLoaded, houses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="all-houses">
          <button onClick={this.switchPage}>Next Houses</button>
          <ul className="houses-list">
            {houses.map((house) => (
              <li className="single-house">
                <House
                  key={house.url}
                  house={house.name}
                  index={house.url.replace(/\D/g, "")}
                />
              </li>
            ))}
          </ul>
        </section>
      );
    }
  }
}
export default AllHouses;
