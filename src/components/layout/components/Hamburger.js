import React from 'react';

import * as Styled from './HamburgerStyled';

class ComponentHamburger extends React.Component {
	render() {
		return [
            <Styled.Label className={this.props.className}>|||</Styled.Label>,
			<Styled.Input type="checkbox" className={this.props.className}></Styled.Input>
        ];
	}
}

export default ComponentHamburger;