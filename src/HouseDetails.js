import React from "react";

class HouseDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      house: {},
      currentLord: {},
      overlord: {},
      heir: {},
    };
  }
  async getHouse() {
    const houseID = this.props.location.pathname.replace(/\D/g, "");
    const apiLink = "https://anapioficeandfire.com/api/houses/" + houseID;
    const response = await fetch(apiLink);
    const json = await response.json();
    console.log(json);
    this.setState({ house: json });
  }
  async getOverlord() {
    const response = await fetch(this.state.house.overlord);
    const json = await response.json();
    this.setState({ overlord: json });
  }
  async getCurrentLord() {
    const response = await fetch(this.state.house.currentLord);
    const json = await response.json();
    this.setState({ overlord: json });
  }
  async getHeir() {
    const response = await fetch(this.state.house.heir);
    const json = await response.json();
    this.setState({ heir: json });
  }
  async componentDidMount() {
    await this.getHouse();
    await this.getOverlord();
    await this.getCurrentLord();
    await this.getHeir();
  }
  render() {
    const { house, overlord, currentLord, heir } = this.state;
    return (
      <div>
        <div className="heading-wrapper">
          <h2 className="houseName">{house.name}</h2>
          <p className="houseWords">{house.words}</p>
        </div>
        <p className="coatOfArms">{house.coatOfArms}</p>
        <p className="currentLord">{currentLord.name}</p>
        <p className="houseOverlord">{overlord.name}</p>
        <p className="houseFounder">{house.founder}</p>
        <p className="houseHeir">{heir.name}</p>
      </div>
    );
  }
}

export default HouseDetails;
