import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Card from "./Card.jsx";
import LeagueWar from "./LeagueWar.jsx";
import LeagueNotStarted from "./LeagueNotStarted.jsx";
import { serverURL, clanId, days } from "../variables/variables.jsx";

class LeagueRounds extends Component {


  constructor(props) {
    super(props);
    this.state = {
      leagueGroupData: {},
      leagueWar: [],
      selectedWarTag: null,
      isLeagueWarVisible: false
    };
  }

  componentDidMount() {

    fetch(serverURL +  "/clan/league?clanId=" + clanId)
      .then(response => response.json())
      .then((dataLeague) => {
        this.setState({ leagueGroupData: JSON.parse(dataLeague) })      
      })
      //.then(dataClanUsers => this.setState({ clanUsers: dataClanUsers }))
      .catch(console.log);
  }

  handleRowClick(warId) {
    const currentExpandedRow = this.state.expandedRow;
    this.setState({selectedWarTag: warId});
    console.log("inside click" + warId);
    this.setState({ isLeagueWarVisible: !this.state.isLeagueWarVisible })

  }

  renderItem(item) {
    if (item !== "#0"){
      const clickCallback = () => this.handleRowClick(item);

      return <td onClick={clickCallback} key={item}>{item}</td>;
    } else {
      return <td>"No information yet"</td>;
    }
  }


  render() {

   
    if(this.state.leagueGroupData !== undefined && this.state.leagueGroupData.rounds !== undefined) {   

    const warTagItems0 = this.state.leagueGroupData.rounds.map(rwt => {
      return this.renderItem(rwt.warTags[0]);
    });

    const warTagItems1 = this.state.leagueGroupData.rounds.map(rwt => {
      return this.renderItem(rwt.warTags[1]);
    });

    const warTagItems2 = this.state.leagueGroupData.rounds.map(rwt => {
      return this.renderItem(rwt.warTags[2]);
    });

    const warTagItems3 = this.state.leagueGroupData.rounds.map(rwt => {
      return this.renderItem(rwt.warTags[3]);
    });
                       
 
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="League War Round"
                category="Click to expand click again to hide - repeat :)"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                      <div>
                 <Table striped hover>
                    <thead>
                      <tr>
                        {days.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                  <tbody>
                      <tr>
                      {warTagItems0}
                        </tr>
                      <tr>
                      {warTagItems1}
                        </tr>
                      <tr>
                      {warTagItems2}
                        </tr>
                      <tr>
                      {warTagItems3}
                        </tr>
                       
                      </tbody>
                    </Table>
                    </div>
                    <div>
                                {this.state.isLeagueWarVisible && <LeagueWar warTag={this.state.selectedWarTag} />}
                                  </div>
                      </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );      
      } else {return <LeagueNotStarted />}

  }
}

export default LeagueRounds;
