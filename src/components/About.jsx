import React, {Component} from 'react';

import { serverURL, clanId } from "../variables/variables.jsx";
import AboutDetails from "./AboutDetails.jsx";

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clanAbout: {}
    };
  }

  componentDidMount() {
    //console.log(clanId);
    fetch(serverURL +  "/clan?clanId=" + clanId)
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
      <div className="content">
        {this.state.clanAbout.clanLevel}
          <AboutDetails item={this.state.clanAbout} />
      </div>
        );
    }

}

export default About;
