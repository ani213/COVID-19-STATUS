import React, { Component } from 'react';
class SubHeading extends Component {
    state = {  }
    render() { 
        return ( 
            <span className="sub-heading">
                {this.props.text && <span className="sub-heading">{this.props.text}</span>}
            </span>
         );
    }
}
 
export default SubHeading;