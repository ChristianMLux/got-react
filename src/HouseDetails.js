import React from "react";

import "./houseDetails.css";
import "./InnerInfoWrapper";
import InnerInfoWrapper from "./InnerInfoWrapper";
import InnerInfoList from "./InnerInfoList";
import MainButton from "./Button";

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
      const response = await fetch(member[1]);
      const json = await response.json();
      if (json.gender === "Female") {
        list.push(<li>Lady {json.name}</li>);
      } else {
        list.push(<li>Lord {json.name}</li>);
      }
    }
    this.setState({ swornMembers: list });
  }
  async componentDidMount() {
    await this.getHouse();
    await this.getOverlord();
    await this.getCurrentLord();
    await this.getHouseFounder();
    await this.getHeir();
    await this.getSwornMembers();
  }
  render() {
    const { house, overlord, currentLord, heir, founder, swornMembers } =
      this.state;
    return (
      <section className="house-detail-section">
        <div className="heading-wrapper">
          <h2 className="house-name">{house.name}</h2>
          <p className="house-words">{house.words ? house.words : ""}</p>
          <MainButton
            buttonClass="back-btn"
            buttonID="backBTN"
            buttonText="Back"
            buttonFunction={this.props.history.goBack}
          />
        </div>
        <p className="coat-of-arms">&#187; {house.coatOfArms} &#171;</p>
        <div className="info-wrapper">
          <InnerInfoWrapper
            innerInfoHeading="Current Lord:"
            innerInfoContent={currentLord.name}
          />
          <InnerInfoWrapper
            innerInfoHeading="Overlord:"
            innerInfoContent={overlord.name}
          />
          <InnerInfoWrapper
            innerInfoHeading="Founder:"
            innerInfoContent={founder.name}
          />
          <InnerInfoWrapper
            innerInfoHeading="Heir:"
            innerInfoContent={heir.name}
          />
          <InnerInfoList
            innerInfoHeading="Sworn Members:"
            innerInfoList={swornMembers}
          />
        </div>
      </section>
    );
  }
}

export default HouseDetails;
