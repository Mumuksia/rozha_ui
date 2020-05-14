import React, {Component} from 'react';

import { serverURL, clanId } from "../variables/variables.jsx";
import AboutDetails from "./AboutDetails.jsx";
import Background from "../assets/imgs/hogrider_bath.jpg";

var sectionStyle = {
  width: "100%",
  height: "600px",
  backgroundImage: "url('https://www.championswarleague.com/img/bg_dark.jpg')",
  backgroundSize: 'cover'  
};

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clanAbout: {}
    };
  }

  componentDidMount() {
    //console.log(clanId);
    fetch(serverURL +  "/clan?clanId=" + clanId, { 
   method: 'get', 
   headers: new Headers({
     "Origin": null
   })})
      .then(response => response.json())
      .then((dataClanAbout) => {
        this.setState({ clanAbout: JSON.parse(dataClanAbout) })
       // console.log(dataClanAbout)
      })
      //.then(dataClanUsers => this.setState({ clanUsers: dataClanUsers }))
      .catch(console.log);
  }

   render() {

        return (
      <div style={sectionStyle} >
               <AboutDetails item={this.state.clanAbout} />
      </div>
        );
    }

}

export default About;
