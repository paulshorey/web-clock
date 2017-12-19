import React from 'react';
import { connect } from 'react-redux';

import * as Styled from './TopStyled';


class Top extends React.Component {

	render() {
        const { className='' } = this.props;

        let message = null;
        if (this.props.myLocation.city) {
	        message = <p className="message">Hello! Looks like you live in {this.props.myLocation.city}?</p>
	      } else if (this.props.starWars) {
        	message = <p className="message">What's your favorite Star Wars character?</p>
        }

        return (
            <Styled.Top className={className + " Top"}>
          		{message}
              <h1 className="logo right">{this.props.route.name} {this.props.route.icon}</h1>
            </Styled.Top>
        );
    }    
}


const mapStateToProps = (state) => {
	// console.log('mapStateToProps',state.anyapi.myLocation);
	return {
    myLocation: state.anyapi.myLocation || {},
    starWars: state.anyapi.starWars || {}
  }
}

export default connect(mapStateToProps)(Top);