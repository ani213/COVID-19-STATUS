import React, { Component } from 'react';
class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="ani-card">
                {this.props.children}
            </div>
         );
    }
}
 
export default Card;