import React, {Component} from 'react';

import header from "./assets/imgs/42689.png";

class Header extends Component {

   render() {

        return (

<div class="header-section">
    <div class="header-section-1">
      
    </div>

    <div class="header-section-2">
      <img src={header} />
    </div>

    <div class="header-section-3">
        Header right content
    </div>
</div>
        );
    }

}

export default Header;
