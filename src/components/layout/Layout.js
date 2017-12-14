import React from 'react';
// import { withRouter } from 'react-router'; // withRouter(YourComponent) to add this.props.history

// import Top from 'components/layout/components/Top';
// import Page from 'components/layout/components/Page';
import Nav from 'components/nav/Nav';

import * as Styled from './LayoutStyled';

class Layout extends React.Component {

	render() {
		var { history } = this.props;
		return (
			<Styled.Layout>
				<Styled.LayoutFromTop>

					{/* TOP content (header) */}
					<Styled.Top>
						<h1 className="logo right">WebClock</h1>
					</Styled.Top>
					<Styled.LayoutFromLeft>

						{/* LEFT  content (nav) */}
						{this.props.pages && (
							<Nav pages={this.props.pages} pathname={"history.location.pathname"} />
						)}

						{/* RIGHT content (page) */}
						<Styled.Page>
							{this.props.children}
						</Styled.Page>
						
					</Styled.LayoutFromLeft>
				</Styled.LayoutFromTop>
			</Styled.Layout>
		);
	}
}

export default Layout;
