import React from 'react';
import { withRouter } from 'react-router-dom';

// style
import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {
	render() {
		return (
            <Styled.Content >
              <p>Dashboard page content</p>
              <p onClick={()=>{ this.props.history.push('/webclock'); }}>Click here to programmatically be redirected to "/webclock"</p>
            </Styled.Content>
		);
	}
}

export default withRouter(ComponentPageContent);
