import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Card from "./Card.jsx";
import LeagueRounds from "./LeagueRounds.jsx";
import LeagueNotStarted from "./LeagueNotStarted.jsx";
import { serverURL, clanId, clanLeagueTitles, days, clanAcademyId } from "../variables/variables.jsx";

class LeagueGroupA extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leagueGroupData: {},
      leagueWar: [],
      expandedRow: null,
      isDay1Visible: false
    };
  }

  componentDidMount() {

    fetch(serverURL +  "/clan/league?clanId=" + clanAcademyId)
      .then(response => response.json())
      .then((dataLeague) => {
        this.setState({ leagueGroupData: JSON.parse(dataLeague) })      
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
                              <td>{item.name}</td>
                              <td>{item.clanLevel}</td>
                              <td>{item.tag}</td>                          
                          </tr>
     ];

    if (this.state.expandedRow === item.tag) {
       item.members.sort((a, b) => a.townHallLevel > b.townHallLevel);
      const listItems = item.members.map((d) => <li key={d.tag}>{d.name}  <b> {d.townHallLevel}</b></li>);
      itemRows.push(
        <div>
          {listItems}
       </div>
      );
    }

    return itemRows;
  }

  render() {

    if(this.state.leagueGroupData !== undefined && this.state.leagueGroupData.clans !== undefined) {

    let allItemRows = [];

        this.state.leagueGroupData.clans.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });

    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="League clans"
                category="list of all clans in a league"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {clanLeagueTitles.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {allItemRows}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );      
    } else {
      return <LeagueNotStarted />
    }

  }
}

export default LeagueGroupA;
