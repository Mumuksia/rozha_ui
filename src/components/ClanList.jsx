import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Card from "./Card.jsx";
import { serverURL, clanListTitles, clanId } from "../variables/variables.jsx";

class ClanList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clanUsers: [],
      expandedRow: null
    };
  }

  componentDidMount() {
    console.log(clanId);
    fetch(serverURL +  "/clan/members?clanId=" + clanId)
      .then(response => response.json())
      .then((dataClanUsers) => {
        this.setState({ clanUsers: dataClanUsers })
        //console.log(dataClanUsers)
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
                              <td>{item.clanRank}</td>
                              <td>{item.donations}</td>
                              <td>{item.donationsReceived}</td>
                              <td>{item.name}</td>
                              <td>{item.role}</td>
                              <td>{item.trophies}</td>
                              <td>            
                                <div className="logo-img">
                          <img src={item.icon} alt="logo_image" />
                      </div>
                    </td>                            
                          </tr>
     ];

    if (this.state.expandedRow === item.tag) {
      itemRows.push(
        <tr>
            <td colspan={Object.keys(this.state.clanUsers[0]).length}>
              <div> {item.name} </div>
            </td>
        </tr>
      );
    }

    return itemRows;
  }

  render() {

    let allItemRows = [];

        this.state.clanUsers.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
        });
    
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Clan Members"
                category="list of all clan members"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {clanListTitles.map((prop, key) => {
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
  }
}

export default ClanList;
