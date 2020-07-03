import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Card from "./Card.jsx";
import { serverURL, clanLeagueWarTitles } from "../variables/variables.jsx";
import stars from "../assets/imgs/stars.jpeg";
import destruction from "../assets/imgs/destruction.jpeg";
import attacksimg from "../assets/imgs/attacks.png";

class LeagueWar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leagueWar: {},
      warTag: props.warTag
    };
  }

  componentDidMount() {
    var nwt = this.state.warTag.replace("#", "%23"); 
    console.log(nwt);
    const urlW = serverURL +  "/clan/league/war?warTag=" + nwt;
    console.log(urlW);
    fetch(urlW)
      .then(response => response.json())
      .then((dataLeague) => {
        this.setState({ leagueWar: dataLeague })
        console.log(dataLeague)
      })
      //.then(dataClanUsers => this.setState({ clanUsers: dataClanUsers }))
      .catch(console.log);
   
  }


  handleRowClick(rowId) {
    const currentExpandedRow = this.state.expandedRow;

    this.setState({ expandedRow: (rowId === currentExpandedRow) ? null : rowId })
  }


  renderItem(item) {
    const clickCallback = () => this.handleRowClick(item.tag);

    const itemRows = [
                      <tr onClick={clickCallback} key={"row-data-" + item.tag}>
                              <td>{item.tag}</td>
                              <td>{item.name}</td>
                              <td>{item.townhallLevel}</td>                          
                              <td>{item.mapPosition}</td>
                          </tr>
     ];

    if (this.state.expandedRow === item.tag) {
      const listItems = item.attacks.map((d) => <li key={d.attackerTag}><b>Stars {d.stars}</b>  {d.destructionPercentage} <b>Opponent: {d.defenderTag}</b></li>);
      itemRows.push(
        <div>
          {listItems}
       </div>
      );
    }

    return itemRows;
  }

  render() {

    if(this.state.leagueWar !== undefined && this.state.leagueWar.clan !== undefined && this.state.leagueWar.clan.members !== undefined) {
   let allItemRows = [];

      let clanMap = this.state.leagueWar.clan.members;
      clanMap.sort((a,b) => a.mapPosition - b.mapPosition);

          clanMap.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);            
        });
      
  
    let allItemOpponentRows = [];
      let oppMap = this.state.leagueWar.opponent.members;
      oppMap.sort((a,b) => a.mapPosition - b.mapPosition);

        oppMap.forEach(item => {
            const oppRows = this.renderItem(item);
            allItemOpponentRows = allItemOpponentRows.concat(oppRows);
        });
 
    
    return (
      <div className="content">

                <div className="container">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12" id="maincontent">
                      <h2>{this.state.leagueWar.clan.name}</h2>
                      <div class="row">
                      <img src={attacksimg} height="50px" width="50px" />
                      {this.state.leagueWar.clan.attacks} &emsp;
                      <img src={stars} height="50px" width="50px" />
                      {this.state.leagueWar.clan.stars} &emsp;
                      <img src={destruction} height="50px" width="50px" />
                      {this.state.leagueWar.clan.destructionPercentage}
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12" id="maincontent">
                      <h2>{this.state.leagueWar.opponent.name}</h2>
                      <div class="row">
                      <img src={attacksimg} height="50px" width="50px" />
                      {this.state.leagueWar.opponent.attacks} &emsp;
                      <img src={stars} height="50px" width="50px" />
                      {this.state.leagueWar.opponent.stars} &emsp;
                      <img src={destruction} height="50px" width="50px" />
                      {this.state.leagueWar.opponent.destructionPercentage}
                      </div>
                    </div>
                  </div>
                </div>
                  <div id="wrap">
                   <div className="container">
                   <Table striped hover>
                    <thead>
                      <tr>
                        {clanLeagueWarTitles.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {allItemRows}
                    </tbody>
                  </Table>
                    </div>
                    <div className="container">
                  <Table striped hover>
                    <thead>
                      <tr>
                        {clanLeagueWarTitles.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {allItemOpponentRows}
                    </tbody>
                  </Table>
                    </div>
                    </div>               
                  </div>
    );     } else {
      return null
    }

  }
}

export default LeagueWar;
