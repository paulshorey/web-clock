import React from 'react';
// import { withRouter } from 'react-router'; // withRouter(YourComponent) to add this.props.history

// import Top from 'components/layout/components/Top';
// import Page from 'components/layout/components/Page';
import Hamburger from 'components/layout/components/Hamburger';
import Nav from 'components/nav/Nav';

import * as Styled from './LayoutStyled';

class Layout extends React.Component {

	render() {
		var { history } = this.props;
		return (
			<Styled.Layout>

				{/* TOP content */}
				<div className="top">
					<h1 className="logo right">WebClock</h1>
				</div>

				{/* main content */}
				<div className="content">

					{/* NAV  content */}
					<Hamburger className="hamburger" />
					<Nav className="nav" pages={this.props.pages} pathname={"history.location.pathname"} />

					{/* PAGE content */}
					<div className="page">
						{this.props.children}
					</div>
						
				</div>
			</Styled.Layout>
		);
	}
}

export default Layout;
