import React, {Component} from 'react';

import ReactPlayer from "react-player"

class Tutorials extends Component {

   render() {
       return (
	   <div>
	     <ReactPlayer
               url="https://www.youtube.com/watch?v=8BxzHW7KQ10"
	       />
	   </div>
  )
    }

}

export default Tutorials;
