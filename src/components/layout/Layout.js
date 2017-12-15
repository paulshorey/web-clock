import React from 'react';
// import { withRouter } from 'react-router'; // withRouter(YourComponent) to add this.props.history

// import Top from 'components/layout/components/Top';
// import Page from 'components/layout/components/Page';
import Hamburger from 'components/layout/components/Hamburger';
import Nav from 'components/nav/Nav';

import * as Styled from './LayoutStyled';

class Layout extends React.Component {

	render() {
		return (
			<Styled.Layout className="Layout">

				{/* TOP content */}
				<div className="top">
					<h1 className="logo right">WebCLOCK <span className="fontIcon icon-stopwatch"></span></h1>
				</div>

				{/* main content */}
				<div className="content">

					{/* NAV  content */}
					<label className="hamburger label">|||</label>
					<input type="checkbox" className="hamburger input"></input>
					<Nav className="nav" pages={this.props.pages} />

					{/* PAGE content */}
					<div className="page">
						<div className="pageContent">
							{this.props.children}
						</div>
					</div>
						
				</div>
			</Styled.Layout>
		);
	}
}

export default Layout;
