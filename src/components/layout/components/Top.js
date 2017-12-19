import React from 'react';

import * as Styled from './TopStyled';


class Top extends React.Component {

	render() {
        const { className='' } = this.props;
        return (
            <Styled.Top className={className + " Top"}>
                <h1 className="logo right">{this.props.route.name} {this.props.route.icon}</h1>
            </Styled.Top>
        );
    }    
}


export default Top;
