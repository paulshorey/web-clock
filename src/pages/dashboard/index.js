import React from 'react';

// store
import { connect } from 'react-redux';
import * as reduxActions from "redux/actions";

// style
import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {
	render() {
		return (
            <Styled.Content >
              <p>Dashboard page content</p>
            </Styled.Content>
		);
	}
}

export default connect()(ComponentPageContent);
