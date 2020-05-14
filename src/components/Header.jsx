import React, {Component} from 'react';

import header from "../assets/imgs/42689.png";

class Header extends Component {

   render() {

        return (

<div className="row">
  <div className="colunm">test</div>
  <div className="column"> <img src={header} /></div>
</div>
        );
    }

}

export default Header;
