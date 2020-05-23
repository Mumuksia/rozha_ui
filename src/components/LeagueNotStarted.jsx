import React, { Component } from "react";
import { Table } from "react-bootstrap";

import notfound from "../assets/imgs/pixar.png";

class LeagueNotStarted extends Component {

  render() {
    
    return (
      <div className="content">
        <Table>
          <tr>
            <td>
              <img src={notfound} />
            </td>
            <td>
              <h1> Та йой та не плакай.... ліга скоро сі почне. </h1>
            </td>
          </tr>
        </Table>
      </div>
    );      
  }
}

export default LeagueNotStarted;
