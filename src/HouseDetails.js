import React from "react";

import "./houseDetails.css";
class HouseDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      house: {},
      currentLord: {},
      overlord: {},
      founder: {},
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
    this.setState({ currentLord: json });
  }
  async getHouseFounder() {
    const response = await fetch(this.state.house.founder);
    const json = await response.json();
    this.setState({ founder: json });
  }
  async getHeir() {
    const response = await fetch(this.state.house.heir);
    const json = await response.json();
    this.setState({ heir: json });
  }
  async getSwornMembers() {
    let list = [];
    for (const member of this.state.house.swornMembers.entries()) {
      list.push(<li>{member}</li>);
    }
  }
  async componentDidMount() {
    await this.getHouse();
    await this.getOverlord();
    await this.getCurrentLord();
    await this.getHouseFounder();
    await this.getHeir();
  }
  render() {
    const { house, overlord, currentLord, heir, founder } = this.state;
    return (
      <section className="house-detail-section">
        <div className="heading-wrapper">
          <h2 className="house-name">{house.name}</h2>
          <p className="house-words">{house.words}</p>
        </div>
        <p className="coat-of-arms">&#187; {house.coatOfArms} &#171;</p>
        <div className="info-wrapper">
          <div className="inner-info-wrapper">
            <p className="inner-info-heading">Current Lord:</p>
            <p className="currentLord">{currentLord.name}</p>
          </div>

          <p className="houseOverlord">{overlord.name}</p>
          <p className="houseFounder">{founder.name}</p>
          <p className="houseHeir">{heir.name}</p>
        </div>
      </section>
    );
  }
}

export default HouseDetails;
