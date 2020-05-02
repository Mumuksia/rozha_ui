import React, {Component} from 'react';

import {
  Container,
  Row,
  Col
} from "react-bootstrap";

class AboutDetails extends Component {

    render() {
        return (
                  <Container fluid>
                          <Row>
                            <Col md={2}>
                              {this.props.clanLevel}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.clanPoints}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.description}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.name}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.location}
                            </Col>
                          </Row>
                          <Row>
                            <Col md={2}>
                              {this.props.item.warWins}
                            </Col>
                          </Row>
                      </Container>
        );
    }
}


export default AboutDetails;
