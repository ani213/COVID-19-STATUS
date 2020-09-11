import React, { Component } from 'react';
class AniText extends Component {
    state = {  }
    render() { 
        return ( 
            <span className="text">
                {this.props.text && <span>{this.props.text}</span>}
            </span>
         );
    }
}
 
export default AniText;