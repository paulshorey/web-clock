import React from 'react';
import { connect } from 'react-redux';

import * as Styled from './TopStyled';

class ComponentTop extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Top will receive props',nextProps);
    }

	render() {
        console.log('Top render',this.props);
        const { page={}, className='' } = this.props;
		return (
			<Styled.Top className={className + " Top"}>
                <h1 className="logo right">{page.name} {page.icon}</h1>
			</Styled.Top>
		);
    }
    
}

function mapStateToProps(state) {
    console.log('mapStateToProps',state);
	return {
		page: state.page
	}
}
export default connect(mapStateToProps)(
    ComponentTop
);
