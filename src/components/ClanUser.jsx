import React, {Component} from 'react';

import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

class ClanMemner extends Component {
  
  constructor(props) {
    super(props);  
  }

    render() {
      console.log(this.props.item)
      console.log(this.props.item.bestTrophies)
      console.log(this.props.item.name)
        return (
                  <Grid fluid>
                          <Row>
                            <Col md={2}>
                              {this.props.item.bestTrophies}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.clanRank}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.donations}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.donationsReceived}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.name}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.role}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.trophies}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.warStars}
                            </Col>
                          </Row>
                      </Grid>
        );
    }
}

export default ClanMemner;
