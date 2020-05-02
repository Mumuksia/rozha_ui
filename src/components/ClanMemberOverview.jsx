import React, {Component} from 'react';

class ClanMemberOverview extends Component {

   render(){
        return (
                          <tr>
                              <td>{this.props.item.clanRank}</td>
                              <td>{this.props.item.donations}</td>
                              <td>{this.props.item.donationsReceived}</td>
                              <td>{this.props.item.name}</td>
                              <td>{this.props.item.role}</td>
                              <td>{this.props.item.trophies}</td>
                              <td>            
                              	<div className="logo-img">
              						<img src={this.props.item.icon} alt="logo_image" />
            					</div>
            				</td>                            
                          </tr>
        );
    }

}

export default ClanMemberOverview;
