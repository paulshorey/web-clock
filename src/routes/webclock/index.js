import React from 'react';
import { withRouter } from 'react-router-dom';

// style
import * as Styled from './indexStyled';

class ComponentPageContent extends React.Component {
	render() {
		return (
            <Styled.Content>

              <p>WebClock page content</p>
              <p onClick={()=>{ this.props.history.push('/timecard'); }}>Click here to programmatically be redirected to "/timecard"</p>

            </Styled.Content>
		);
	}
}

export default withRouter(ComponentPageContent);
