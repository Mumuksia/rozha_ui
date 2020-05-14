import React, {Component} from 'react';
import { Table } from "react-bootstrap";
import clanLevel from "../assets/imgs/clanLevel.jpeg";
import location from "../assets/imgs/ua-barms.gif";
import trundle from "../assets/imgs/Trundle_1.jpg";
import jareky from "../assets/imgs/jareky.jpeg";
import martyn from "../assets/imgs/martyn.jpg";
import highlander from "../assets/imgs/highlander.jpeg";
import {clanIdEsc} from "../variables/variables.jsx";

var description = {
    background: "#cdcdcd", 
    marginBottom: "10px"
};

var points = {
  paddingLeft: "0px",
  listStyleType: "none"
}

var paddLeft = {
  paddingLeft: "25px"
}

class AboutDetails extends Component {

    render() {
        return (
                <div className="container">
                  <div class="row">
                    <div class="col-lg-9 col-md-9 col-sm-12" id="maincontent">

                      <h2>{this.props.item.name}</h2>
                  <div className="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 text-center">  
                      <img src="https://api-assets.clashofclans.com/badges/200/-J1K8IT1A_w5Ue6B9UyR85dfg0ZreMXiaIiNAnJWqCs.png" 
                           width="200px"/>
                    </div>
                    <div class="col-lg-7 col-md-7 col-sm-12">  
                      <table class="table table-condensed">  
                        <tbody><tr><th>Clan tag</th>
                            <td>
                              <a href="https://link.clashofclans.com/?action=OpenClanProfile&amp;tag=%2398URYYCP" rel="nofollow">{clanIdEsc}</a>
                          </td></tr>  
                          <tr><th>Location</th>
                          <td><a href="https://www.championswarleague.com/clans/locations/ukraine">{this.props.item.location}</a></td></tr>  
                          <tr><th>War Wins</th><td>{this.props.item.warWins}</td></tr>  
                          <tr>
                            <th>Clan Points</th><td style={points}>{this.props.item.clanPoints}</td>
                          </tr>  
                       </tbody>
                      </table>
                    </div>
                  </div>


                  <div class="row">
                    <div class="col-md-10 col-md-offset-1 col-sm-10 text-left" style={description}>
                      <h3>Наш опис</h3>
                      <p>
                        <i class="fa fa-quote-right" aria-hidden="true"></i> 
                        <em>{this.props.item.description}</em>
                      </p>
                    </div>
                  </div>
                  </div>
                    <div id="sidebar" class="col-lg-3 col-md-3 col-sm-12">
                      <h3>Контактні особи</h3>
                      	<Table>
                          <tr><td> Highlander</td><td><img src={highlander} width="50px" height="50px"/></td></tr>
                          <tr><td> Jareky</td><td><img src={jareky} width="50px" height="50px"/></td></tr>
                          <tr><td> pavlo-killer2</td><td><img src={martyn} width="50px" height="50px"/></td></tr>
                          <tr><td> Muksia</td><td><img src={trundle} width="50px" height="50px"/></td></tr>
	                </Table>
                        </div>
                  </div>
                  </div>
        );
    }
}


export default AboutDetails;
